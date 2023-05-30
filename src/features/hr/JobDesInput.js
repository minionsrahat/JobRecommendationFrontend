import React from 'react';
import ErrorText from '../../components/Typography/ErrorText';

const JobDesInput = ({ handleSubmit, textRef ,errorText}) => {
    return (
        <>
            <form onSubmit={handleSubmit} className='py-6'>
                <div className="container items-center justify-center flex">
                <textarea className="textarea textarea-primary w-1/2" ref={textRef} placeholder="Job Description"></textarea>
                    <button type="submit" className='btn ml-3'>Submit</button>
                </div>
                <ErrorText>{errorText}</ErrorText>
            </form>
        </>
    );
};

export default JobDesInput;