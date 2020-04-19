import React from "react";

export const getDangerouslySetInnetHtmlInfoText = () => (
    <>
        <div style={ {
            background: '#eee',
            marginBottom: '20px',
            maxWidth:"300px",
            minHeight: '20px',
            borderRadius: '7px',
            padding: '10px'
        } }>
            &lt;p id=&quot;avsnitt&quot;&gt;
                Ett avsnitt
            &lt;/p&gt;
        </div>
        Basert på bruker handling kan man bytte innholdet i dette p-elemtet ved hjelp av innerHTML:
        <div
            style={ {
                background: '#eee',
                marginBottom: '20px',
                maxWidth:"700px",
                minHeight: '20px',
                borderRadius: '7px',
                padding: '20px'
            } }
        >
            document.getElementById("myParagraph").innerHTML = "Dette er et annet avsnitt";
        </div>

        Ved å sette dangerouslySetInnerHTML-propertien i React vil det si å sette innerHTML og propertien er kalt akkurat dette for en grunn.<br />
        Denne metoden å endre innhold på er utsatt for XSS-angrep.

        <span style={ {margin: '20px 0', display: 'block' } }>
            Her har vi en side som lar deg lage din egen html.
            Ta en titt på koden og prøv å hack dette inputfeltet
            ved å få den til å kjøre et script: alert("Hacked!")
        </span>
    </>
);


export const getEvalInfoText = () => (
    <>
        <div
            style={ {
                background: '#eee',
                marginBottom: '20px',
                maxWidth:"300px",
                minHeight: '20px',
                borderRadius: '7px',
                padding: '10px'
            } }
        >
            Dersom man har funksjoner eller utrykk skrevet i streng kan man bruke funksjonen eval() for å får svaret.
            eval() kan også brukes til å deserialisere data.

            <span style={ {margin: '20px 0', display: 'block' } }>
                Ta en titt på koden og prøv å hack dette inputfeltet
                ved å få den til å kjøre et script: alert("Hacked!")
            </span>
        </div>
    </>
);

export const getHrefInfoText = () => (
    <>
        <div
            style={ {
                background: '#eee',
                marginBottom: '20px',
                maxWidth:"300px",
                minHeight: '20px',
                borderRadius: '7px',
                padding: '10px'
            } }
        >
            Her har vi en side hvor folk skal lagre sin egen profil. Det er og et felt til hvor personen kan legge inn adressen til sin egen hjemmeside. Kan vi utny
tte dette?
            <span style={ {margin: '20px 0', display: 'block' } }>
                Ta en titt på koden og prøv å hack inputfeltet "Hjemmeside"
                ved å få den til å kjøre et script: alert("Hacked!")
            </span>
        </div>
    </>
);