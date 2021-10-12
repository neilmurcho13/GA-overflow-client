import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getMyProfileData } from "../../api/authFunctions";

const MyProfile = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    getMyProfileData().then((data) => {
      setProfileData(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h1>User profile page</h1>
    </div>
  );
};

export default MyProfile;
