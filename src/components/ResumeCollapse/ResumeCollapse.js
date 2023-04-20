import React from 'react';

const ResumeCollapse = ({resume_text}) => {
    return (
        <>
        <div className='w-3/5'>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mx-auto">
                <div className="collapse-title text-xl font-medium">
                   Resume Information
                </div>
                <div className="collapse-content">
                    <p>{resume_text}</p>
                </div>
            </div>
        </div>
           
        </>
    );
};

export default ResumeCollapse;