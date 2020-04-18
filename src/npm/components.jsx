import React from "react";
import Markdown from "markdown-to-jsx";

export const HelpButton = ({ href = "/npm/hjelp" }) => {
    return (
        <a className="button" href={href}>
            Hjelp
        </a>
    );
};

export const SendButton = ({ onClick }) => {
    return <button onClick={onClick}>Send melding</button>;
};

export const Message = ({ children }) => {
    return (
        <div className="message">
            <Markdown>{children}</Markdown>
        </div>
    );
};

export const MessageInput = (props) => {
    return <textarea className="message-input" {...props}></textarea>;
};
