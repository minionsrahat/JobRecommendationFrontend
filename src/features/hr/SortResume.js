import axios from 'axios';
import React, { useRef, useState } from 'react';
import InputFileCard from '../../components/Cards/InputFileCard';
import ExcelSheetInput from './ExcelSheetInput';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';
import ParseResumeTable from './ParsedResumeTable';
import JobDesInput from './JobDesInput';
import Subtitle from '../../components/Typography/Subtitle';
import SortedResumeTable from './SortedResumeTable';

const SortResume = () => {
    const fileInputRef = useRef();
    const jod_des_text = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [resumes, setResumes] = useState([])
    const [sortedResumes, setSortedResumes] = useState([])
    const [error, setErrorMsg] = useState('')


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    // Helper function to count words in a string
    const countWords = (text) => {
        const words = text.trim().split(/\s+/);
        return words.length;
    };

    const handleSortResume = async (event) => {
        event.preventDefault();

        const jobDescription = jod_des_text.current.value;

        if (countWords(jobDescription) < 50) {
            // Display an error message
            setErrorMsg('Job description must have more than 100 words')
        }

        else {
            setErrorMsg('')
            const formData = new FormData();
            formData.append('job_desc', jobDescription);
            formData.append('resume', JSON.stringify(resumes));

            try {
                const response = await axios.post('http://127.0.0.1:5000/sort_resumes', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const { error, sorted_resumes } = response.data;
                if (error) {
                    setErrorMsg(error)
                } else {
                    setSortedResumes(sorted_resumes);
                }

            } catch (error) {
                // Handle error
                console.error(error);
            }

        }

    };



    const handleResumeExceelSheetSubmit = async (event) => {
        event.preventDefault();
        let response;
        try {
            const formData = new FormData();
            formData.append('excel_file', selectedFile);
            response = await axios.post('http://127.0.0.1:5000/parse_resume_excel_sheet', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { resumes } = response.data
            setResumes(resumes)
        } catch (error) {
            console.error(error);
            setSelectedFile(null);
            fileInputRef.current.value = null;
        }
        finally {
            console.log(resumes)
            fileInputRef.current.value = null; // Reset the input field
        }
    };
    return (
        <>
            <InputFileCard title="Current Jobs" InputComponent={<ExcelSheetInput handleSubmit={handleResumeExceelSheetSubmit}
                fileInputRef={fileInputRef}
                handleFileChange={handleFileChange} />}></InputFileCard>
            <CommonTitleCard title="Parsed Resumes">

                {/* Jobs List in table format loaded from slice after api call */}
                <ParseResumeTable parsed_resumes={resumes}></ParseResumeTable>
                <div className="divider"></div>
                <Subtitle styleClass={'text-center'}>Upload Job Description And Get Sorted Resume List</Subtitle>
                <JobDesInput handleSubmit={handleSortResume} errorText={error} textRef={jod_des_text}></JobDesInput>
            </CommonTitleCard>

            <CommonTitleCard title="Sorted Resumes">

                <SortedResumeTable sorted_resumes={sortedResumes}></SortedResumeTable>

            </CommonTitleCard>
        </>



    );
};

export default SortResume;