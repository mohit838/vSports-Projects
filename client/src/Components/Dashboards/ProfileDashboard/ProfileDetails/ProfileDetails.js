import React from "react";
import useAuth from "../../../../Hooks/useAuth";

const ProfileDetails = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Profile Details</h1>
      <h3>Name: {user.displayName}</h3>
      <h4>vID: {user.vid}</h4>
    </div>
  );
};

export default ProfileDetails;
