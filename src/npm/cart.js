import { useState, useEffect } from "react";
import { defaultsDeep } from "lodash";

export function useShoppingCart() {
    const [cart, setCart] = useState(loadShoppingCart());

    useEffect(() => saveShoppingCart(cart), [cart]);

    const addToCart = (name) => {
        setCart({ ...cart, items: [...cart.items, name] });
    };

    const clearCart = () => {
        setCart({ ...cart, items: [] });
    };

    return { addToCart, clearCart, cart };
}

function loadShoppingCart() {
    return defaultsDeep(
        {
            items: [],
        },
        JSON.parse(sessionStorage.getItem("cart"))
    );
}

function saveShoppingCart(cart) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
}
