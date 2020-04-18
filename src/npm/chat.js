import { useState, useEffect } from "react";
import { defaultsDeep } from "lodash";

export function useChat() {
    const [cart, setCart] = useState({ items: [] });

    useEffect(() => {
        const fetch = async () => {
            setCart(await loadMessages());
        };
        fetch();
    }, []);

    useEffect(() => saveMessages(cart), [cart]);

    const addToCart = (name) => {
        setCart({ ...cart, items: [...cart.items, name] });
    };

    const clearCart = () => {
        setCart({ ...cart, items: [] });
    };

    return { addMessage: addToCart, clearCart, messages: cart };
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
            "Content-Type": "application/json"
        }
    });
}
