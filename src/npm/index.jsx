import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { OrderButton } from "./buttons";
import { useShoppingCart } from "./cart";

export default () => {
    const [current, setCurrent] = useState("");
    const { addToCart, clearCart, cart } = useShoppingCart();
    return (
        <div>
            <h1>NPM og tredjeparts biblioteker</h1>

            <Switch>
                <Route path="/npm/bestill">
                    <h2>Kvittering</h2>
                    <p>Takk for bestillingen.</p>
                </Route>
                <Route path="/npm">
                    <h2>Bestillingsbekreftelse</h2>

                    <div>
                        <div>
                            <input onChange={(e) => setCurrent(e.target.value)}></input>
                            <button onClick={() => addToCart(current)}>Legg til vare</button>
                        </div>
                        <ol>
                            {cart.items.map((name, i) => (
                                <li key={i}>{name}</li>
                            ))}
                        </ol>
                        <button onClick={clearCart}>Tøm handlekurv</button>
                        <OrderButton />
                    </div>
                </Route>
            </Switch>
        </div>
    );
};
