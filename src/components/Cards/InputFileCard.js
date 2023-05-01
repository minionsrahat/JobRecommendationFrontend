import React from 'react';

const InputFileCard = ({title, children, InputComponent}) => {
    return (
        <>
            <div className={"card w-full p-2 bg-base-100 shadow-xl my-4"}>
                {
                    InputComponent && <div>{InputComponent}</div>
                }

                <div className="divider"></div>

                {/** Card Body */}
                <div className='h-full w-full pb-1 bg-base-100'>
                    {children}
                </div>
            </div>
        </>
    );
};

export default InputFileCard;