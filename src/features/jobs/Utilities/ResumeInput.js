import React from 'react';

const ResumeInput = ({ handleSubmit, fileInputRef, handleFileChange }) => {
    return (
        <>
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
                <div className="container p-5 items-center justify-center flex flex-col">
                    <ul class="steps">
                        <li class="step step-primary">Upload Resume</li>
                        <li class="step step-primary">Parse Resume</li>
                        <li class="step step-primary">Resume Accuracy</li>
                        <li class="step">Recommended Jobs</li>
                    </ul>
                </div>
            </form>
        </>
    );
};

export default ResumeInput;