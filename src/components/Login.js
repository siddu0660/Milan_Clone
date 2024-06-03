import React, { useEffect, useState } from 'react';
import { signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { auth, provider } from "./Firebase";

export const GoogleSignIn = ({ setUserEmail }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmailLocal, setUserEmailLocal] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
        setUserEmailLocal(user.email);
        setUserEmail(user.email);
      } else {
        setIsSignedIn(false);
        setUserEmailLocal('');
        setUserEmail('');
        }
    });

    return unsubscribe;
  }, [setUserEmail]);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert(`Logged in as ${user.email}`);
        setUserEmailLocal(user.email);
        setUserEmail(user.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Login failed: " + errorMessage);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div>
      {isSignedIn ? (
        <div>
          <button id="googleSignInButton" onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button id="googleSignInButton" onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};