import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import './App.css';

const firebaseConfig = {
  apiKey: 'AIzaSyC6vo48SaMqEIambl1Jc6ok3EIPq8ctEa4',
  authDomain: 'sign-in-d8de9.firebaseapp.com',
  projectId: 'sign-in-d8de9',
  storageBucket: 'sign-in-d8de9.appspot.com',
  messagingSenderId: '390843331814',
  appId: '1:390843331814:web:795944f11f018e1c283727',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((person) => {
      if (person) {
        setUser(person);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      console.log('Sign-in successful!');
    } catch (err) {
      console.error('Error during sign-in:', err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Sign-out successful!');
    } catch (err) {
      console.error('Error during sign-out:', err);
    }
  };

  return (
    <div className="app">
      <div className="card">
        {user ? (
          <div>
            <h4>Welcome, {user.displayName}</h4>
            <button className="button" onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <button className="button" onClick={signInWithGoogle}>Sign In with Google</button>
        )}
      </div>
    </div>
  );
};

export default App;
