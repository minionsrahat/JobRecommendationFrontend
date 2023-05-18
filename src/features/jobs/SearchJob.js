import React, { useState, useRef } from 'react';
import axios from 'axios';
import InputFileCard from "../../components/Cards/InputFileCard"
import ResumeInput from "./Utilities/ResumeInput"
import ClusterTab from "./Utilities/ClusterTab"
import CommonTitleCard from "../../components/Cards/CommonTitleCard"
import RecommendationTable from "./RecommendationTable"
import ResumeInfoCard from "./components/ResumeInfoCard"
import ResumeAccuracy from "./components/ResumeAccuracy"


const SearchJob = () => {
    const textInput = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [resume, setResumeText] = useState(null);
    const [predicted_cluster, setPredictedCluster] = useState();
    const [total_cluster, setTotalCluster] = useState();
    const [active_cluster, setActiveCluster] = useState();
    const [recommended_jobs, setRecommendedJobs] = useState([])
    const [all_jobs, setAllJobs] = useState([])
    const [resume_score, setResumeScore] = useState(null)


    const handle_cluster = (new_cluster_val) => {
        setActiveCluster(new_cluster_val)
        setRecommendedJobs(all_jobs[new_cluster_val])
    }

    return (
       <>
       
       <InputFileCard title="Current Jobs">Helo World</InputFileCard>

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
                <RecommendationTable recommended_jobs={recommended_jobs}></RecommendationTable>
            </CommonTitleCard>
       </>
    );
};

export default SearchJob;