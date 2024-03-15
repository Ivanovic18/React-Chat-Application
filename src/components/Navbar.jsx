import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <p className="initializing">Initializing...</p>;
    }

    return (
        <div className="navbar">
            {user ? (
                <div className="profile">
                    <img src={user.photoURL} alt="profile-img" />
                    <p>{user.displayName}</p>
                </div>
            ) : (
                <h1 className="heading">Chat App</h1>
            )}
            {user ? <SignOut /> : <SignIn />}
        </div>
    );
};

export default Navbar;
