import React from "react";
import { auth } from "../firebase";

const SignOut = () => {
    return (
        <div>
            <button className="btn" onClick={() => auth.signOut()}>
                Logout
            </button>
        </div>
    );
};

export default SignOut;
