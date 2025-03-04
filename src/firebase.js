// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBw1dKGieeBQWVC2Ezc5lJp_5WjssdOidw",
    authDomain: "auth-dd31f.firebaseapp.com",
    projectId: "auth-dd31f",
    storageBucket: "auth-dd31f.firebasestorage.app",
    messagingSenderId: "109799638104",
    appId: "1:109799638104:web:2e57a9b1debcb89f71b62d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
