import React from "react";
import { loadShoppingCart } from "./api";

export default (props = {}) =>  {
    const cart = loadShoppingCart();
    return <div>
        <h1>Klarer du å få denne til å kjøre javascriptkode uten å endre kildekoden?</h1>

        <div>
            {
                cart.items.map(c => <p>{c}</p>)
            }
            <a href={props.url}>Confirm</a>
        </div>
    </div>;
}