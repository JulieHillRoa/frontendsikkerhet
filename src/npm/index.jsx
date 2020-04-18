import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { HelpButton, Message, MessageInput, SendButton } from "./components";
import { useChat } from "./chat";
import "./npm.css";

export default () => {
    const [current, setCurrent] = useState("");
    const { addMessage, state } = useChat();
    
    const items = [ ...state.messages ];
    items.reverse();
    return (
        <div className="superchat">
            <h1>NPM og tredjeparts biblioteker</h1>

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
                            <MessageInput onChange={(e) => setCurrent(e.target.value)}></MessageInput>
                            <SendButton onClick={() => addMessage(current)} />
                            <HelpButton />
                        </div>
                        {items.map(({content}, i) => (
                            <Message key={i}>{content}</Message>
                        ))}
                    </div>
                </Route>
            </Switch>
        </div>
    );
};
