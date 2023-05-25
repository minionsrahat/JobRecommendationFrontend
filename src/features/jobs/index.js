import React, { useState, useRef } from 'react';
import axios from 'axios';
import InputFileCard from "../../components/Cards/InputFileCard"
import ResumeInput from "./Utilities/ResumeInput"
import ClusterTab from "./Utilities/ClusterTab"
import CommonTitleCard from "../../components/Cards/CommonTitleCard"
import RecommendationTable from "./RecommendationTable"
import ResumeInfoCard from "./components/ResumeInfoCard"
import ResumeAccuracy from "./components/ResumeAccuracy"
import { useNavigate } from 'react-router-dom';

function Leads() {

    const fileInputRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [resume, setResumeText] = useState(null);
    const [predicted_cluster, setPredictedCluster] = useState();
    const [total_cluster, setTotalCluster] = useState();
    const [active_cluster, setActiveCluster] = useState();
    const [recommended_jobs, setRecommendedJobs] = useState([])
    const [all_jobs, setAllJobs] = useState([])
    const [resume_score, setResumeScore] = useState(null)
    const navigate = useNavigate();


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleNavigation = (job_id) => {
        navigate(`get_job_by_id/${job_id}`);
      };



    const handleRecommendationRequest = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        let response;
        try {
            const formData = new FormData();
            formData.append('resume', JSON.stringify(resume));
            response = await axios.post('http://127.0.0.1:5000/get_recommendation', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { all_cluster_jobs, predicted_cluster, total_cluster } = response.data
            setAllJobs(all_cluster_jobs)
            setRecommendedJobs(all_cluster_jobs[predicted_cluster])
            setPredictedCluster(predicted_cluster)
            setTotalCluster(total_cluster)
            setActiveCluster(predicted_cluster)
            console.log("Recommended Jobs ", recommended_jobs)

        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
        finally {
            setIsLoading(false);

        }
    };

    const handleResumeSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        let response;
        try {
            const formData = new FormData();
            formData.append('resume_file', selectedFile);
            response = await axios.post('http://127.0.0.1:5000/extract_resume_info', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { resume, score } = response.data
            setResumeScore(score)
            setResumeText(resume);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            setSelectedFile(null);
            fileInputRef.current.value = null;
        }
        finally {
            setIsLoading(false);
            setSelectedFile(null);
            console.log("Resume Text:", resume)
            fileInputRef.current.value = null; // Reset the input field
        }
    };

    const handle_cluster = (new_cluster_val) => {
        setActiveCluster(new_cluster_val)
        setRecommendedJobs(all_jobs[new_cluster_val])
    }

    return (
        <>
            <InputFileCard title="Current Jobs" InputComponent={<ResumeInput handleSubmit={handleResumeSubmit}
                fileInputRef={fileInputRef}
                handleFileChange={handleFileChange} />}></InputFileCard>

            {resume && <ResumeInfoCard resume={resume}></ResumeInfoCard>}
            {resume && <ResumeAccuracy score={resume_score}
                handleRecommendationRequest={handleRecommendationRequest}></ResumeAccuracy>}


            <CommonTitleCard title="Recommended Jobs">
                {recommended_jobs && recommended_jobs.length > 0 &&
                    <>
                        <div className="items-center justify-center flex flex-col">
                            <ul class="menu menu-vertical shadow p-4 lg:menu-horizontal bg-base-100 rounded-box">
                                <li className="">Predicted Cluster: {predicted_cluster}</li>
                            </ul>
                            <ClusterTab predicted_cluster={predicted_cluster} handle_cluster={handle_cluster} active_cluster={active_cluster} total_cluster={total_cluster}></ClusterTab>
                        </div>


                    </>

                }
                {/* Jobs List in table format loaded from slice after api call */}
                <RecommendationTable handleNavigation={handleNavigation} recommended_jobs={recommended_jobs}></RecommendationTable>
            </CommonTitleCard>
        </>
    )
}


export default Leads