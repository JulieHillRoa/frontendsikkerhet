import { defaultsDeep } from "lodash";

export function loadShoppingCart() {
    return defaultsDeep(
        {
            items: [],
        },
        JSON.parse(sessionStorage.getItem("cart"))
    );
}
