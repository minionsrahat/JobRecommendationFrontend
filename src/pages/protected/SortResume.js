import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import SortResume from '../../features/hr/SortResume'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Sort Applicants Resume Based on Job Description"}))
      }, [])


    return(
        <SortResume></SortResume>
    )
}

export default InternalPage