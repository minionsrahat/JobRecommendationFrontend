import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { deleteLead, getLeadsContent } from "./leadSlice"
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'
import React, { useState, useRef } from 'react';
import axios from 'axios';
import InputFileCard from "../../components/Cards/InputFileCard"
import ResumeInput from "./Utilities/ResumeInput"
import ClusterTab from "./Utilities/ClusterTab"
import CommonTitleCard from "../../components/Cards/CommonTitleCard"
import RecommendationTable from "./RecommendationTable"
import ResumeInfoCard from "./components/ResumeInfoCard"

function Leads() {

    const fileInputRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [resume, setResumeText] = useState({});
    const [predicted_cluster, setPredictedCluster] = useState();
    const [total_cluster, setTotalCluster] = useState();
    const [active_cluster, setActiveCluster] = useState();
    const [recommended_jobs, setRecommendedJobs] = useState([])
    const [all_jobs, setAllJobs] = useState([])


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleRecommendationRequest = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        let response;
        try {
            const formData = new FormData();
            formData.append('resume_file', selectedFile);
            response = await axios.post('http://127.0.0.1:5000/get_recommendation', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { all_cluster_jobs, predicted_cluster, resume_text, total_cluster } = response.data
            setAllJobs(all_cluster_jobs)
            setRecommendedJobs(all_cluster_jobs[predicted_cluster])
            setResumeText(resume_text);
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
            const { resume } = response.data
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
            <InputFileCard title="Current Leads" InputComponent={<ResumeInput handleSubmit={handleResumeSubmit}
                fileInputRef={fileInputRef}
                isLoading={isLoading} handleFileChange={handleFileChange} />}></InputFileCard>

            {resume && <ResumeInfoCard resume={resume}></ResumeInfoCard>}
            
            <CommonTitleCard title="Recommended Jobs">
                {recommended_jobs && recommended_jobs.length > 0 &&

                    <ClusterTab predicted_cluster={predicted_cluster} handle_cluster={handle_cluster} active_cluster={active_cluster} total_cluster={total_cluster}></ClusterTab>
                }
                {/* Jobs List in table format loaded from slice after api call */}
                <RecommendationTable recommended_jobs={recommended_jobs}>

                </RecommendationTable>
            </CommonTitleCard>


        </>
    )
}


export default Leads