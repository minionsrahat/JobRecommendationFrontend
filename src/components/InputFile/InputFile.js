import React, { useState, useRef } from 'react';
import axios from 'axios';
import RecommendJobTable from '../Table/RecommendJobTable';
import ResumeCollapse from '../ResumeCollapse/ResumeCollapse';
import ClusterTab from '../ClusterTab/ClusterTab';

const InputFile = () => {

  const fileInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [resume_text, setResumeText] = useState('');
  const [predicted_cluster, setPredictedCluster] = useState();
  const [total_cluster, setTotalCluster] = useState();
  const [active_cluster, setActiveCluster] = useState();
  const [recommended_jobs, setRecommendedJobs] = useState([])
  const [all_jobs, setAllJobs] = useState([])

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    let response;
    try {
      const formData = new FormData();
      formData.append('resume_file', selectedFile);
      response = await axios.post('http://127.0.0.1:5000/submitFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setSelectedFile(null);
      fileInputRef.current.value = null;
    }
    finally {
      const { all_cluster_jobs, predicted_cluster, resume_text, total_cluster } = response.data
      setAllJobs(all_cluster_jobs)
      setRecommendedJobs(all_jobs[predicted_cluster])
      setResumeText(resume_text);
      setPredictedCluster(predicted_cluster)
      setTotalCluster(total_cluster)
      setActiveCluster(predicted_cluster)
      setIsLoading(false);
      setSelectedFile(null);
      fileInputRef.current.value = null; // Reset the input field
    }
  };

 const handle_cluster=(new_cluster_val)=>{
    setActiveCluster(new_cluster_val)
    setRecommendedJobs(all_jobs[new_cluster_val])
 }
  return (
    <>
      <form onSubmit={handleSubmit} className='p-10'>
        <div className="container items-center justify-center flex">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <button type="submit" className='btn ml-3'>Upload</button>
        </div>
        <div className="container p-5 items-center justify-center flex flex-col">
          {isLoading && (
            <>
              <progress className="progress w-56 "></progress>
              <p className="text-sky-400 text-xl mt-3 font-medium">Extracting Text From Resume...</p>
            </>
          )}
        </div>
      </form>
      <div className="container p-5 items-center justify-center flex flex-col">
        {resume_text && (
          <>
            <ResumeCollapse resume_text={resume_text}></ResumeCollapse>
          </>
        )}
      </div>
      {/* {recommended_jobs.length > 0 &&
       <ClusterTab predicted_cluster={predicted_cluster} handle_cluster={handle_cluster} active_cluster={active_cluster} total_cluster={total_cluster}></ClusterTab>
      } */}
    
      {recommended_jobs &&
        <RecommendJobTable jobs={recommended_jobs}></RecommendJobTable>
      }

    </>



  );
};

export default InputFile;
