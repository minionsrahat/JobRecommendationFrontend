import React from 'react';
import CommonTitleCard from '../../../components/Cards/CommonTitleCard';
import TitleCard from '../../../components/Cards/TitleCard';
const ResumeInfoCard = ({resume}) => {
    return (
     <>
             <CommonTitleCard title={"Extracted Resume Information"}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TitleCard  title={"Basic Info"} topMargin={"mt-2"}>
                        <div className=" text-left">
                            <p>Name:{resume.name}</p>
                            <p>Email:{resume.email}</p>
                            <p>Phone:{resume.mobile_number}</p>
                        </div>
                    </TitleCard>

                    <TitleCard  title={"Professional Experiences"} topMargin={"mt-2"}>
                        <div className=" text-left">
                        <p>Designation:{resume.designation}</p>
                        <p>Experience:{resume.experience}</p>
                        <p>Education:{resume.degrees}</p>
                        <p>Majors:{resume.majors}</p>
                        </div>
                    </TitleCard>

                    <TitleCard  title={"Technical Skills"} topMargin={"mt-2"}>
                        <div className=" text-left">
                        <p>Skills:{resume.skills}</p>
                        </div>
                    </TitleCard>
                </div>
                <button  className="btn btn-primary px-6" >Get Recommendation</button>
            </CommonTitleCard>
     
     </>
    );
};

export default ResumeInfoCard;