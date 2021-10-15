import React, { useState, useEffect } from 'react'
import { getMyProfileData } from '../../api/authFunctions'
import { motion } from 'framer-motion'

const MyProfile = () => {
  const [profileData, setProfileData] = useState([])

  useEffect(() => {
    getMyProfileData().then((data) => {
      setProfileData(data)
    })
  }, [])

  console.log('users profile data', profileData)
  return (
    <motion.div
      className='profile-container'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <h2>Current user username : {profileData.username}</h2>
      <h2>Current user ID : {profileData._id}</h2>
      <h2>Current user first name : {profileData.firstName}</h2>
      <h2>Current user last name : {profileData.lastName}</h2>
      <h2>Current user location : {profileData.location}</h2>
      <h2>Current user status : {profileData.status}</h2>
    </motion.div>
  )
}

export default MyProfile
