import React, { useState, useRef } from 'react';
import axios from 'axios';
import InputFileCard from "../../components/Cards/InputFileCard"
import escapeRegExp from 'escape-string-regexp';
import ClusterTab from "./Utilities/ClusterTab"
import CommonTitleCard from "../../components/Cards/CommonTitleCard"

import SearchQueryInputField from './Utilities/SearchQueryInputField';
import { useEffect } from 'react';
import FindJobsTable from './FindJobsTable';


const SearchJob = () => {
    const titleInput = useRef();
    const companyInput = useRef();
    const skillsInput = useRef();
    const [total_cluster, setTotalCluster] = useState();
    const [active_cluster, setActiveCluster] = useState(0);
    const [active_cluster_jobs, setActiveClusterJobs] = useState([])
    const [all_jobs, setAllJobs] = useState([])


    useEffect(() => {
        const fetchJobsData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/get_jobs');
                const { all_cluster_jobs, total_cluster } = response.data.jobs
                setAllJobs(all_cluster_jobs)
                setActiveClusterJobs(all_cluster_jobs[active_cluster])
                setTotalCluster(total_cluster)
            } catch (error) {
                // Handle error
                console.error(error);
            }
        };
        fetchJobsData();
    }, []);



    const handleSearch = () => {
        console.log("Active Cluster:", active_cluster);
        console.log("Search:", skillsInput.current.value);
      
        const titleInputValue = titleInput.current.value.trim();
        const companyInputValue = companyInput.current.value.trim();
        const skillsInputValue = skillsInput.current.value.trim();
      
        let filteredJobs = all_jobs[active_cluster];
      
        if (titleInputValue !== '') {
          const titleSearchRegex = new RegExp(titleInputValue, 'i');
          filteredJobs = filteredJobs.filter((job) => {
            const jobTitle = job.position.toLowerCase();
            return titleSearchRegex.test(jobTitle);
          });
        }
      
        if (companyInputValue !== '') {
          const companySearchRegex = new RegExp(companyInputValue, 'i');
          filteredJobs = filteredJobs.filter((job) => {
            const jobCompany = job.company.toLowerCase();
            return companySearchRegex.test(jobCompany);
          });
        }
      
        if (skillsInputValue !== '') {
            const escapedSkillsInputValue = escapeRegExp(skillsInputValue);
          const skillsSearchRegex = new RegExp(escapedSkillsInputValue, 'i');
          filteredJobs = filteredJobs.filter((job) => {
            const jobSkills = job.skill.toLowerCase();
            return skillsSearchRegex.test(jobSkills);
          });
        }
        setActiveClusterJobs(filteredJobs);
      };
      

    useEffect(() => {
        setActiveClusterJobs(all_jobs[active_cluster]);
        handleSearch();
    }, [active_cluster]);


    const handle_cluster = (new_cluster_val) => {
        console.log("New Value ", new_cluster_val);
        setActiveCluster(new_cluster_val);
    };

    return (
        <>

            <InputFileCard title="Search Your Desired Jobs" InputComponent={<SearchQueryInputField
                handleInputChange={handleSearch} jobTitleTextInput={titleInput} jobCompanyTextInput={companyInput}
                jobSkillsTextInput={skillsInput}
            ></SearchQueryInputField>}></InputFileCard>

            <CommonTitleCard title="Recommended Jobs">
                {all_jobs && all_jobs.length > 0 &&
                    <>
                        <div className="items-center justify-center flex flex-col">
                            <ClusterTab predicted_cluster={0} handle_cluster={handle_cluster} active_cluster={active_cluster} total_cluster={total_cluster}></ClusterTab>
                        </div>
                        <FindJobsTable recommended_jobs={active_cluster_jobs}></FindJobsTable>
                    </>

                }
                {/* Jobs List in table format loaded from slice after api call */}

            </CommonTitleCard>
        </>
    );
};

export default SearchJob;