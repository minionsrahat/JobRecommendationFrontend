import React, { useEffect, useState } from 'react';
import JobInfoCard from './components/JobInfoCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDeatails = () => {
    const { job_id } = useParams();
    const [job_details,setJobDetails]=useState({})
    console.log("Job Id:",job_id)

    useEffect(() => {
        const fetchJobsData = async () => {
          try {
            const response = await axios.post('http://127.0.0.1:5000/get_job_by_id', {
              job_id: job_id // Replace 'job_id' with the actual value
            });
            const { jobs_data } = response.data;
            setJobDetails(jobs_data)
          } catch (error) {
            // Handle error
            console.error(error);
          }
        };
      
        fetchJobsData();
      }, [job_id]);
      
    
    return (
       <>
       {
        Object.keys(job_details).length>0 &&
        <JobInfoCard job={job_details}></JobInfoCard>
       }
       </>
    );
};

export default JobDeatails;