import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, displayName } = auth.currentUser;

        if (input === "") {
            alert("Please enter a valid message");
            return;
        }

        await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp(),
        });
        setInput("");
    };

    return (
        <form className="message-form">
            <input
                className="input-message"
                type="text"
                value={input}
                placeholder="Message"
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="send-btn" onClick={sendMessage}>
                Send
            </button>
        </form>
    );
};

export default SendMessage;
