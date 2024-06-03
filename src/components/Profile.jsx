import React, { useState } from 'react';
import { GoogleSignIn } from './Login';
import User from "./User"
import '../App.css';

const Profile = () => {
  const [userEmail, setUserEmail] = useState('');

  return (
    <div>
      <div className="profile" id="profile">
        <GoogleSignIn setUserEmail={setUserEmail} />
        <br />
      </div>
      <br />
      {userEmail && <User userEmail={userEmail} />}
      <br />
    </div>
  );
};

export default Profile;