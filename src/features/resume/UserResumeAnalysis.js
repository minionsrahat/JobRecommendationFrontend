import axios from 'axios';
import React, { useRef, useState } from 'react';
import InputFileCard from '../../components/Cards/InputFileCard';
import ResumeInput from '../jobs/Utilities/ResumeInput';
import ResumeInfoCard from '../jobs/components/ResumeInfoCard';
import ResumeAccuracy from '../jobs/components/ResumeAccuracy';

const UserResumeAnalysis = () => {

    const fileInputRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [resume, setResumeText] = useState(null);
    const [resume_score, setResumeScore] = useState(null)


    const handleResumeSubmit = async (event) => {
        event.preventDefault();
        let response;
        try {
            const formData = new FormData();
            formData.append('resume_file', selectedFile);
            response = await axios.post('http://127.0.0.1:5000/extract_resume_info', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { resume, score } = response.data
            setResumeScore(score)
            setResumeText(resume);
        } catch (error) {
            console.error(error);
            setSelectedFile(null);
            fileInputRef.current.value = null;
        }
        finally {
            setSelectedFile(null);
            console.log("Resume Text:", resume)
            fileInputRef.current.value = null; // Reset the input field
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
      <>
       <InputFileCard title="Current Jobs" InputComponent={<ResumeInput handleSubmit={handleResumeSubmit}
                fileInputRef={fileInputRef}
                handleFileChange={handleFileChange} />}></InputFileCard>

            {resume && <ResumeInfoCard resume={resume}></ResumeInfoCard>}
            {resume && <ResumeAccuracy score={resume_score}></ResumeAccuracy>}
      </>
    );
};

export default UserResumeAnalysis;