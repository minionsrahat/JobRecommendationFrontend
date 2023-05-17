import React from 'react';
import CommonTitleCard from '../../../components/Cards/CommonTitleCard';
import TitleCard from '../../../components/Cards/TitleCard';
import ErrorText from '../../../components/Typography/ErrorText'
const ResumeInfoCard = ({ resume}) => {
    return (
        <>
            <CommonTitleCard title={"Extracted Resume Information"}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TitleCard title={"Basic Info"} topMargin={"mt-2"}>
                        <table className="text-left  table-compact table w-full">
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{resume?.name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{resume?.email}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>{resume?.mobile_number}</td>
                                </tr>
                            </tbody>
                        </table>
                    </TitleCard>
                    <TitleCard title={"Professional Experiences"} topMargin={"mt-2"}>
                        {resume.experience.length > 0 ? (
                            <ul className="list-disc  text-left grid grid-cols-2 gap-1">
                                {resume.experience.map((experience, index) => (
                                    <li key={index}>{experience}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No professional experience found</p>
                        )}
                    </TitleCard>
                    <TitleCard title={"Education"} topMargin={"mt-2"}>
                        {resume.degrees.length > 0 ? (
                            <ul className="list-disc  text-left grid grid-cols-2 gap-1">
                                {resume.degrees.map((degree, index) => (
                                    <li key={index}>{degree}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No education found</p>
                        )}
                    </TitleCard>

                    <TitleCard title={"Majors"} topMargin={"mt-2"}>
                        {resume.majors.length > 0 ? (
                            <ul className="list-disc text-left grid grid-cols-2 gap-1">
                                {resume.majors.map((major, index) => (
                                    <li key={index}>{major}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No major found</p>
                        )}
                    </TitleCard>
                    <TitleCard title={"Designation"} topMargin={"mt-2"}>
                        {resume.designation.length > 0 ? (
                            <ul className="list-disc text-left grid grid-cols-2 gap-1">
                                {resume.designation.slice(0, 4).map((designation, index) => (
                                    <li key={index}>{designation}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No matching designations found</p>
                        )}
                    </TitleCard>
                </div>
                  <TitleCard title={"Technical Skills"} topMargin={"mt-2"}>
                    {resume.skills.split(',').length>0?(
                        <div className=" text-left">
                            <p>{resume.skills.split(',').map((skill, index) => (
                                <div key={index} class="badge badge-warning mr-1">{skill}   </div>
                                ))}</p>
                        </div>
                    ):(
                        <p>No matching skills found</p>
                    )}
                        
                    </TitleCard>
               
            </CommonTitleCard>
        </>
    );
};

export default ResumeInfoCard;