import { useState, useEffect } from "react";
import { defaultsDeep } from "lodash";

const initialState = {
    messages: [],
};

export function useChat() {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const fetch = async () => {
            const d = await loadState();
            setState(d);
        };
        fetch();
    }, []);

    const addMessage = async (content) => {
        await saveMessage({ content });
        setState({ ...state, messages: [...state.messages, { content }] });
    };
    
    return { addMessage, state };
}

async function loadState() {
    const chat = await fetch("/api/messages");
    const json = await chat.json();
    return defaultsDeep({}, initialState, json);
}

async function saveMessage(message) {
    await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
