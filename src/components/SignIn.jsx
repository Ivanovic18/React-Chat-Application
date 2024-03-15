import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const SignIn = () => {
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    return (
        <button className="btn" onClick={signIn}>
            Sign In
        </button>
    );
};

export default SignIn;
