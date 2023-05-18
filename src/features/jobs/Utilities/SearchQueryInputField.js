import React from 'react';
import Subtitle from '../../../components/Typography/Subtitle';

const SearchQueryInputField = ({ jobTitleTextInput, jobCompanyTextInput,jobSkillsTextInput,handleInputChange }) => {
    return (
        <>
            <Subtitle styleClass={"text-center"}>
                Search Your Desired Jobs
            </Subtitle>
            <div className=' mt-5 flex justify-evenly'>
                <div className="form-control w-full max-w-xs">
                    <input type="text" ref={jobTitleTextInput} onChange={handleInputChange} placeholder="Enter Job Title" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <input type="text" ref={jobCompanyTextInput} onChange={handleInputChange} placeholder="Company" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <input type="text" ref={jobSkillsTextInput} onChange={handleInputChange} placeholder="Job Skills" className="input input-bordered w-full max-w-xs" />
                </div>

            </div>
        </>
    );
};

export default SearchQueryInputField;