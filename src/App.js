import React from 'react';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import SendMessage from './components/SendMessage';
import './App.css';


function App() {
    const [user] = useAuthState(auth);
    let appClass;

    if (user) {
        appClass = "app-container";
    } else {
        appClass = "app-container-not-signed";
    }

    return (
        <div className={appClass}>
            <Navbar />
            {user && <Chat />}
            {user && <SendMessage />}
        </div>
    );
};

export default App;
