import React from 'react';

const fakeSite = () => (
    window.opener.document.getElementById("webappBody").innerHTML =
    "<div>" +
        "<h1>!!HACKED!!</h1>" +
        "<p>" +
            "Siden du gikk til har kontroll over din side." +
            "<br />" +
            "<br />" +
            "Isteden for å bare endre innholdet på siden her kunne de for eksempel " +
            "heller ha redirected til en side med tilsynelatende lik innloggingside." +
            "<br />" +
            "For en bruker som ikke sjekker url-adressen da, er det lett å bare logge seg inn på nytt og " +
            "gi sin data til den ondsinnede siden." +
            "<br />" +
            "<br />" +
            "<br />" +
            "Din oppgave er nå å tette dette sikkerhetshullet. Koden finner du i /webapp/Tabsnapping.jsx" +
        "</p>" +
    "</div>"
);

export default () => {
    if(window.opener) {
        fakeSite();
    }
    return (
        <>
            <h1>Ute på nettet</h1>
            <p>La oss nå si at vi har gått til en ekstern side.</p>
            <br/>
            <p>Klikk på tabben til vår orginale side. Har noe skjedd?</p>
        </>
    );
}

