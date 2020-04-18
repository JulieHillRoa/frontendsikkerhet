import React, { useState } from "react";
import { Route, Switch, } from "react-router-dom";
import { loadShoppingCart, saveCart } from "./api";

export default (props = {}) =>  {
    const [cart, setCart] = useState(loadShoppingCart());
    const [current, setCurrent] = useState("");

    const addToCart = () => {
        const updatedCart = { ...cart, items: [ ...cart.items, current ] };
        setCart(updatedCart)
        saveCart(updatedCart);
    }

    const clearCart = () => {
        const updatedCart = { ...cart, items: [ ] };
        setCart(updatedCart)
        saveCart(updatedCart);
    }

    return <div>
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
                        <input value={current} onChange={e => setCurrent(e.target.value)}></input>
                        <button onClick={addToCart}>Legg til vare</button>
                    </div>
                    <ol>
                        {
                            cart.items.map((name, i) => <li key={i}>{name}</li>)
                        }
                    </ol>
                    <button onClick={clearCart}>Tøm handlekurv</button>
                    <a href={props.url || "/npm/bestill"}>Send bestilling</a>
                </div>
            </Route>
        </Switch>
    </div>;
}

