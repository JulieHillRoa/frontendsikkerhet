import React from "react";
import { loadShoppingCart } from "./api";

const products = {
    hus: {
        url: "/hus"
    }
}

export default (props = {}) =>  {
    const cart = loadShoppingCart();
    return <div>
        <h1>NPM og tredjeparts biblioteker</h1>

        <h2>Klarer du å få denne til å kjøre javascriptkode uten å endre kildekoden?</h2>

        <div>
            {
                cart.items.map(c => <p>{c}</p>)
            }
            <a href={props.url}>Confirm</a>
        </div>
    </div>;
}

