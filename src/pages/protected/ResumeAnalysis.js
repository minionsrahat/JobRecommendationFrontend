import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import UserResumeAnalysis from '../../features/resume/UserResumeAnalysis'

function ResumeAnalysis(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Resume Analysis"}))
      }, [])


    return(
        <UserResumeAnalysis/>
    )
}

export default ResumeAnalysis