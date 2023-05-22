import React from 'react';

const ExcelSheetInput = ({ handleSubmit, fileInputRef, handleFileChange }) => {
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
            </form>
        </>
    );
};

export default ExcelSheetInput;