// UserAuth.js
import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const UserAuth = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const { email, password } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const signUp = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
        } catch (err) {
            console.log("Sign Up Error:", err.message);
        }
    };

    const signIn = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in:", userCredential.user);
        } catch (err) {
            console.log("Sign In Error:", err.message);
        }
    };

    return (
        <div>
            <center>
                <form autoComplete="off">
                    <h4>Authentication</h4>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={changeHandler}
                        required
                    /><br />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={changeHandler}
                        required
                    /><br />
                    <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
                    <button onClick={signUp}>Sign Up</button>
                </form>
            </center>
        </div>
    );
};

export default UserAuth;
