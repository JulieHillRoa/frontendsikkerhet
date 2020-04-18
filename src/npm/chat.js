import { useState, useEffect } from "react";
import { defaultsDeep } from "lodash";

export function useChat() {
    const [messages, setMessages] = useState({ items: [] });

    useEffect(() => {
        const fetch = async () => {
            setMessages(await loadMessages());
        };
        fetch();
    }, []);

    useEffect(() => saveMessages(messages), [messages]);

    const addToCart = (name) => {
        setMessages({ ...messages, items: [...messages.items, name] });
    };

    const clearCart = () => {
        setMessages({ ...messages, items: [] });
    };

    return { addMessage: addToCart, clearCart, messages: messages };
}

async function loadMessages() {
    const cart = await fetch("/api/messages");
    const json = await cart.json();
    return defaultsDeep(
        {
            items: [],
        },
        json
    );
}

function saveMessages(cart) {
    fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify(cart),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
