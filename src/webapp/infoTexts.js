import React from 'react';
import './webapp.css';
import siluett from './siluett.png';

export const getDangerouslySetInnetHtmlInfoText = () => (
    <>
        <div className="infoText">
            &lt;p id=&quot;avsnitt&quot;&gt;
                Ett avsnitt
            &lt;/p&gt;
            <br />
            <br />
            Basert på bruker handling kan man bytte innholdet i dette p-elemtet ved hjelp av innerHTML:
            <br />
            <br />
            document.getElementById("myParagraph").innerHTML = "Dette er et annet avsnitt";
            <br />
            <br />
            Ved å sette dangerouslySetInnerHTML-propertien i React vil det si å sette innerHTML og propertien er kalt akkurat dette for en grunn.<br />
            Denne metoden å endre innhold på er utsatt for XSS-angrep.
            <br />
            <br />
            <span className="oppgaveText">
                Her har vi en side som lar deg lage din egen html.
                Ta en titt på koden og prøv å hack dette inputfeltet
                ved å få den til å kjøre et script: alert("Hacked!")
            </span>
        </div>
    </>
);


export const getEvalInfoText = () => (
    <>
        <div className="infoText">
            Dersom man har funksjoner eller utrykk skrevet i streng kan man bruke funksjonen eval() for å får svaret.
            eval() kan også brukes til å deserialisere data.

            <span className="oppgaveText">
                Ta en titt på koden og prøv å hack dette inputfeltet
                ved å få den til å kjøre et script: alert("Hacked!")
            </span>
            <p>
                Vi har fått besøk av en nystisk gjest. Du kan spørre personen om navn, yrke, adresse og alder.
            </p>
            <img src={siluett} alt="" />
        </div>
    </>
);

export const getHrefInfoText = () => (
    <>
        <div className="infoText">
            Her har vi en side hvor folk skal lage sin egen profil. Det er et felt hvor personen kan legge inn adressen til sin egen hjemmeside.
            Kan vi utnytte dette?
            <span className="oppgaveText">
                Ta en titt på koden og prøv å hack inputfeltet "Hjemmeside - adresse"
                ved å få den til å kjøre et script: alert("Hacked!")
            </span>
        </div>
    </>
);