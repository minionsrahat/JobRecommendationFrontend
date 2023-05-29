import React from 'react';
import ErrorText from '../../../components/Typography/ErrorText';

const ResumeInput = ({ handleSubmit, fileInputRef, handleFileChange,errorMessage }) => {
    console.log(errorMessage)
    return (
        <>
        <h2 className='text-center text-2xl'>Upload Your Resume</h2>
            <form onSubmit={handleSubmit} className='py-6'>
                <div className="container items-center justify-center flex">
                    <input
                        type="file"
                        className="file-input file-input-bordered w-full max-w-xs"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                    <button type="submit" className='btn ml-3'>Upload</button>
                </div>
                <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                <div className="container p-5 items-center justify-center flex flex-col">
                    <ul class="steps">
                        <li class="step step-primary">Upload Resume</li>
                        <li class="step step-primary">Parse Resume</li>
                        <li class="step step-primary">Resume Accuracy</li>
                        <li class="step step-primary">Recommended Jobs</li>
                    </ul>
                </div>
            </form>
        </>
    );
};

export default ResumeInput;