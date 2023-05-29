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
    const [error, setErrorMsg] = useState('');
    const [errorState, setErrorState] = useState(false);


    const handleResumeSubmit = async (event) => {
        event.preventDefault();
        let response;
        try {
            if(!errorState && selectedFile)
            {
              const formData = new FormData();
              formData.append('resume_file', selectedFile);
              response = await axios.post('http://127.0.0.1:5000/extract_resume_info', formData, {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
              });
              const { resume, score } = response.data
              localStorage.setItem('resume', JSON.stringify(response.data))
              setResumeScore(score)
              setResumeText(resume);
      
            }
            else{
              setErrorMsg('Sorry you didnt select any resume file');
            }
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
        const file = event.target.files[0];
            const allowedExtensions = ['pdf', 'doc', 'docx', 'txt'];
            const fileExtension = file.name.split('.').pop().toLowerCase();
            console.log(fileExtension)
            if (!allowedExtensions.includes(fileExtension)) {
                setErrorState(true)
                setErrorMsg('Invalid file format. Only PDF, DOC, DOCX, and TXT files are allowed.');
                fileInputRef.current.value = null;
            }
            else{
                setErrorState(false)
                setSelectedFile(event.target.files[0]);
                setErrorMsg('');
            }
       
    };

    return (
      <>
       <InputFileCard title="Current Jobs" InputComponent={<ResumeInput errorMessage={error} handleSubmit={handleResumeSubmit}
                fileInputRef={fileInputRef}
                handleFileChange={handleFileChange} />}></InputFileCard>

            {resume && <ResumeInfoCard resume={resume}></ResumeInfoCard>}
            {resume && <ResumeAccuracy score={resume_score}></ResumeAccuracy>}
      </>
    );
};

export default UserResumeAnalysis;