import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/Appcontext'

const Appointment = () => {

    const { docId } = useParams()
    const {doctors} = useAppContext()

    const [docInfo, setDocInfo] = useState(null)

    const fetchDocinfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
      setDocInfo(docInfo)
      console.log(docInfo)
    }

    useEffect(() => {
        fetchDocinfo()
        
    },[doctors, docId])


  return (
    <div>Appointment</div>
  )
}

export default Appointment