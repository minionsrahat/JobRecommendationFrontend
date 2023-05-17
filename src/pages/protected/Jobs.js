import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Leads from '../../features/jobs'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Jobs Recommendation"}))
      }, [])


    return(
        <Leads />
    )
}

export default InternalPage