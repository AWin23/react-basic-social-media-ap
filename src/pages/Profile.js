// Profile.jsx
import React from "react";
import { ChangeProfile } from "../component/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      {" "}
      THIS IS THE PROFILE PAGE OF: {username}
      <ChangeProfile />

      { /*Use setUserName prop*/}
    </div>
  );
};
