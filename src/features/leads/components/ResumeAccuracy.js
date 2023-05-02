import React from 'react';
import ErrorText from '../../../components/Typography/ErrorText';
import TitleCard from '../../../components/Cards/TitleCard';
import CommonTitleCard from '../../../components/Cards/CommonTitleCard';

const ResumeAccuracy = ({ score, handleRecommendationRequest }) => {
    const disable = score < 0.5
    
    return (
        <>
            <CommonTitleCard title={"Resume Accuracy"}>
                <div className='flex flex-col justify-center items-center'>
                <div className="radial-progress bg-primary my-3 text-primary-content border-4 border-primary" style={{"--value":score*100}}>{(score*100).toFixed(1)}%</div>                {
                    disable && <ErrorText>Sorry, your resume score is not above the threshold value. Therefore, we cannot provide any job recommendations for you. Please consider improving your resume and try again.</ErrorText>
                }
                <div className='text-center mt-4'><button disabled={disable} onClick={(e) => handleRecommendationRequest(e)} className="btn btn-primary px-6" >Get Recommendation</button>
                </div>
                </div>
         
            </CommonTitleCard>


        </>
    );
};

export default ResumeAccuracy;