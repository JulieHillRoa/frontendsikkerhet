import React, { useState, useEffect } from "react";
import { getOppgave5InfoText } from "./infoTexts";

const loadState = () => {
    const state = window.localStorage.getItem("fancy");
    return state ? JSON.parse(state) : { value: "" };
};

const saveState = (state) => {
    window.localStorage.setItem("fancy", JSON.stringify(state));
};

/**
 * This is my super flexible input field, it can be configured as any element you want! E.g.
 *
 * <FancyInput element="textarea" value="Look, a text area!" />
 * <FancyInput element="input" value="Also, a normal input" />
 * <FancyInput element={MyCustomElement} value="With a custom component" />
 *
 * It's simply Amazing!
 */
function FancyInput({ element: Element = "input", ...other }) {
    return <Element {...other}></Element>;
}

export default () => {
    const [value, setValue] = useState(loadState());

    useEffect(() => {
        saveState(value);
    }, [value]);

    return (
        <>
            <h2>Oppgave 5</h2>
            { getOppgave5InfoText() }
            <label htmlFor="fancy">Noter navnet ditt her, så husker vi det til neste gang</label>
            <br />
            <FancyInput
                className="input"
                id="fancy"
                {...value}
                onChange={(e) => setValue({ ...value, value: e.target.value })}
            />
        </>
    );
};
