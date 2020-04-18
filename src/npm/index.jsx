import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { HelpButton } from "./buttons";
import { useChat } from "./chat";

export default () => {
    const [current, setCurrent] = useState("");
    const { addMessage, messages } = useChat();
    return (
        <div>
            <h1>NPM og tredjeparts biblioteker</h1>

            <p></p>

            <Switch>
                <Route path="/npm/hjelp">
                    <h2>FAQ</h2>

                    <h3>Hvordan sender jeg meldinger?</h3>

                    <p>Skriv inn melding i feltet og trykk "Send melding".</p>
                </Route>
                <Route path="/npm">
                    <h2>Superchat</h2>

                    <p>En åpen chat-kanal for alle og enhver!</p>

                    <div>
                        <div>
                            <input onChange={(e) => setCurrent(e.target.value)}></input>
                            <button onClick={() => addMessage(current)}>Send melding</button>
                        </div>
                        {messages.items.map((name, i) => (
                            <p key={i}>{name}</p>
                        ))}
                        <HelpButton />
                    </div>
                </Route>
            </Switch>
        </div>
    );
};
