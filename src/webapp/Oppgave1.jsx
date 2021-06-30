import React, {useState} from 'react';
import './webapp.css';
import { getOppgave1InfoText } from './infoTexts';

export default () => {
    const [inputText, setIputText] = useState({
        navn: '',
        adresse: '',
        telefon: '',
        hjemmesideAdr: '',
        hjemmesideNavn: 'Min hjemmeside',
    });
    return (
        <>
            <h2>Oppgave 1</h2>
            { getOppgave1InfoText() }
            <form className="margin-bottom-40">
                <label htmlFor="navn">Fult navn</label>
                <input
                    id="navn"
                    className="input"
                    onChange={ (e) => setIputText({ ...inputText, navn: e.target.value }) }
                    value={ inputText.navn }
                    placeholder="Ditt navn"
                />
                <label htmlFor="adresse">Adresse</label>
                <input
                    id="adresse"
                    className="input"
                    onChange={ (e) => setIputText({ ...inputText, adresse: e.target.value }) }
                    value={ inputText.adresse }
                    placeholder="Skriv noe pent"
                />
                <label htmlFor="telefon">Telefonnummer</label>
                <input
                    id="telefon"
                    className="input"
                    onChange={ (e) => setIputText({ ...inputText, telefon: e.target.value }) }
                    value={ inputText.telefon }
                    placeholder="Telefonnummer"
                />
                <label htmlFor="hjemmeside">Hjemmeside - navn </label>
                <input
                    id="hjemmeside"
                    className="input"
                    onChange={ (e) => setIputText({ ...inputText, hjemmesideNavn: e.target.value }) }
                    value={ inputText.hjemmesideNavn }
                    placeholder="adresse til din hjemmeside"
                />
                <label htmlFor="hjemmesideAdr">Hjemmeside - adresse</label>
                <input
                    id="hjemmesideAdr"
                    className="input"
                    onChange={ (e) => setIputText({ ...inputText, hjemmesideAdr: e.target.value }) }
                    value={ inputText.hjemmesideAdr }
                    placeholder="adresse til din hjemmeside"
                />
            </form>
            <div>
                <h2>Din profil:</h2>
                <strong>Navn: </strong>{ inputText.navn }<br />
                <strong>Adresse: </strong>{ inputText.adresse }<br />
                <strong>Telefon: </strong>{ inputText.telefon }<br />
                <strong>Hjemmeside: </strong>

                <a href={inputText.hjemmesideAdr}> Min hjemmeside </a>

                <br />
            </div>
        </>
    )
}