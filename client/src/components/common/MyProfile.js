import React, { useState, useEffect } from 'react'
import { getMyProfileData } from '../../api/authFunctions'

const MyProfile = () => {
  const [profileData, setProfileData] = useState([])

  useEffect(() => {
    getMyProfileData().then((data) => {
      setProfileData(data)
      console.log(data)
    })
  }, [])

  return (
    <div className='profile-container'>
      <h2>Current user username : {profileData.username}</h2>
      <h2>Current user ID : {profileData._id}</h2>
      <h2>Current user first name : {profileData.firstName}</h2>
      <h2>Current user last name : {profileData.lastName}</h2>
      <h2>Current user location : {profileData.location}</h2>
    </div>
  )
}

export default MyProfile
