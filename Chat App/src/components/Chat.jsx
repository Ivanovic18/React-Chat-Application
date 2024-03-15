import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Message from "./Message";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        scroll.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("timestamp"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="chat">
            {messages &&
                messages.map((message) => (
                    <Message
                        key={message.id}
                        message={message}
                        messages={messages}
                    />
                ))}
            <span ref={scroll}></span>
        </div>
    );
};

export default Chat;
