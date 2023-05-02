import React from 'react';

const ResumeInput = ({ handleSubmit, fileInputRef, isLoading, handleFileChange }) => {
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
                        <li class="step step-primary">Register</li>
                        <li class="step step-primary">Choose plan</li>
                        <li class="step">Purchase</li>
                        <li class="step">Receive Product</li>
                    </ul>
                    {isLoading && (
                        <>
                            <progress className="progress w-56 "></progress>
                            <p className="text-sky-400 text-xl mt-3 font-medium">Extracting Text From Resume...</p>
                        </>
                    )}
                </div>
            </form>
        </>
    );
};

export default ResumeInput;