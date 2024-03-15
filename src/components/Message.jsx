import React from "react";
import { auth } from "../firebase";

const Message = ({ message }) => {
    let messageClass;
    let messageSender;
    let messageContent;

    if (message.uid === auth.currentUser.uid) {
        messageClass = "message-right";
        messageSender = "message-sender-right";
        messageContent = "message-content-right";
    } else {
        messageClass = "message-left";
        messageSender = "message-sender-left";
        messageContent = "message-content-left";
    }

    return (
        <div className={messageClass}>
            <p className={messageSender}>{message.name}</p>
            <p className={messageContent}>{message.text}</p>
        </div>
    );
};

export default Message;
