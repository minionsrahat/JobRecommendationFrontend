import React from 'react';
import CommonTitleCard from '../../../components/Cards/CommonTitleCard';
import TitleCard from '../../../components/Cards/TitleCard';


const JobInfoCard = ({ job }) => {
    console.log("JOB DATA:"+job)
    return (
        <>
            <CommonTitleCard title={job?.position.split('_')[2]}>
                <TitleCard title={"Job Description"} topMargin={"mt-2"}>
                    <div className=" text-left">
                        <p>{job?.description.slice(0,800)}...</p>
                    </div>
                    <div className='mt-2 text-center'>
                    <a href={job?.link} className='btn'>Get Full Job Description</a>
                    </div>

                </TitleCard>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TitleCard title={"Accepted Majors"} topMargin={"mt-2"}>
                        {job['Acceptable majors']?.length > 0 ? (
                            <ul className="list-disc text-left grid grid-cols-2 gap-1">
                                <li >{job['Acceptable majors']}</li>
                            </ul>
                        ) : (
                            <p>No Required major found</p>
                        )}
                    </TitleCard>
                    <TitleCard title={"Minimum Required Degree"} topMargin={"mt-2"}>
                        {job['Minimum degree level']?.length > 0 ? (
                            <ul className="list-disc text-left grid grid-cols-2 gap-1">
                                <li >{job['Minimum degree level']}</li>
                            </ul>
                        ) : (
                            <p>No Required Degrees found</p>
                        )}
                    </TitleCard>
                </div>
                <TitleCard title={"Required Skills"} topMargin={"mt-2"}>
                    {job?.skill?.split(',').length > 0 ? (
                        <div className=" text-left">
                            <p>{job.skill.split(',').map((skill, index) => (
                                <div key={index} class="badge badge-warning mr-1">{skill}   </div>
                            ))}</p>
                        </div>
                    ) : (
                        <p>No Required skills found</p>
                    )}

                </TitleCard>

            </CommonTitleCard>
        </>
    );
};

export default JobInfoCard;