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
      <h2>Username : {profileData.username}</h2>
      <h2>First name : {profileData.firstName}</h2>
      <h2>Last name : {profileData.lastName}</h2>
      <h2>Current location : {profileData.location}</h2>
      <h2>User status : {profileData.status}</h2>
    </motion.div>
  )
}

export default MyProfile
