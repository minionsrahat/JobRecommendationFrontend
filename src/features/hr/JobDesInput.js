import React from 'react';

const JobDesInput = ({ handleSubmit, textRef }) => {
    return (
        <>
            <form onSubmit={handleSubmit} className='py-6'>
                <div className="container items-center justify-center flex">
                <textarea className="textarea textarea-primary w-1/2" ref={textRef} placeholder="Bio"></textarea>
                    <button type="submit" className='btn ml-3'>Submit</button>
                </div>
            </form>
        </>
    );
};

export default JobDesInput;