import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import SearchJob from '../../features/jobs/SearchJob'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Finds Your Desired Jobs"}))
      }, [])


    return(
        <SearchJob></SearchJob>
    )
}

export default InternalPage