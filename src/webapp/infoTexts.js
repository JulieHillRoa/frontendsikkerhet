import React from 'react';
import './webapp.css';
import siluett from './siluett.png';

export const getOppgave1InfoText = () => (
    <div className="infoText">
        Her har vi en side hvor folk skal lage sin egen profil. Det er et felt hvor personen kan legge inn adressen til sin egen hjemmeside.
        Kan vi utnytte dette?
        <span className="oppgaveText">
            Ta en titt på koden og prøv å hack inputfeltet "Hjemmeside - adresse"
            ved å få den til å kjøre et script: alert("Hacked!")
        </span>
    </div>
);

export const getOppgave2InfoText = () => (
    <div className="infoText">
        Her har vi en side som lar deg bygge opp din egen html.
        <span className="oppgaveText">
            Ta en titt på koden og prøv å hack dette inputfeltet/textarea
            ved å få den til å kjøre et script: alert("Hacked!")
        </span>
    </div>
);


export const getOppgave4InfoText = () => (
    <div className="infoText">
        Dersom man har funksjoner eller utrykk skrevet i streng kan man bruke funksjonen eval() for å evaluere dette.
        eval() kan brukes til å deserialisere data, utføre mattematiske funksjoner med mer.

        <p>
            Vi har fått besøk av en mystisk gjest. Du kan spørre personen om <strong>navn</strong>, <strong>yrke</strong>, <strong>adresse</strong> og <strong>alder</strong>.
            Disse tilsvarer propertier på et json-object som beskriver personen.
            Du kan for eksempel skrive <strong>navn</strong> inn i inputfeltet og du vil få navnet til vår mystiske gjest i retur.
        </p>

        <span className="oppgaveText">
            Ta en titt på koden og prøv å hack dette inputfeltet
            ved å få den til å kjøre et script: alert("Hacked!")
        </span>

        <img src={siluett} alt="" />
    </div>
);

export const getOppgave5InfoText = () => (
    <div className="infoText">
        <span className="oppgaveText">
            Ta en titt på koden og prøv å hack denne siden
            ved å få den til å kjøre et script: alert("Hacked!")
        </span>
    </div>
);

