import React, { useState, useRef } from 'react';
import axios from 'axios';
import InputFileCard from "../../components/Cards/InputFileCard"
import ResumeInput from "./Utilities/ResumeInput"
import ClusterTab from "./Utilities/ClusterTab"
import CommonTitleCard from "../../components/Cards/CommonTitleCard"
import RecommendationTable from "./RecommendationTable"
import ResumeInfoCard from "./components/ResumeInfoCard"
import ResumeAccuracy from "./components/ResumeAccuracy"
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
        console.log("Active Cluster:", active_cluster)
        console.log("Search:", skillsInput.current.value)
        let filteredJobs = []
        if (titleInput.current.value.trim() !== '') {
            const titleSearchRegex = new RegExp(titleInput.current.value, 'i');
            filteredJobs = all_jobs[active_cluster].filter((job) => {
                const jobTitle = job.position.toLowerCase();
                return (
                    titleSearchRegex.test(jobTitle)
                );
            });
        }
        if (companyInput.current.value.trim() !== '') {
            const companySearchRegex = new RegExp(companyInput.current.value.trim(), 'i');
            let jobs = []
            if (filteredJobs.length === 0) {
                jobs = all_jobs[active_cluster]
            }
            else {
                jobs = filteredJobs
            }
            filteredJobs = jobs.filter((job) => {
                const jobCompany = job.company.toLowerCase();
                return (
                    companySearchRegex.test(jobCompany)
                );
            });

          console.log(filteredJobs)
        }
        if (skillsInput.current.value.trim() !== '') {
            console.log('Hello')
            const skillsSearchRegex = new RegExp(skillsInput.current.value.trim(), 'i');
            let jobs = []
            if (filteredJobs.length === 0) {
                jobs = all_jobs[active_cluster]
            }
            else {
                jobs = filteredJobs
            }
            filteredJobs = jobs.filter((job) => {
                const jobSkills = job.skill.toLowerCase();
                return (
                    skillsSearchRegex.test(jobSkills)
                );
            });
        }
        if(titleInput.current.value.trim() === '' && companyInput.current.value.trim() === ''&& skillsInput.current.value.trim() === ''){
            filteredJobs=all_jobs[active_cluster]
        }
        setActiveClusterJobs(filteredJobs)



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