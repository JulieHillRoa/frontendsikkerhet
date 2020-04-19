import React, {useState} from 'react';

export default () => {
    const [inputText, setIputText] = useState({
        navn: '',
        adresse: '',
        telefon: '',
        hjemmesideAdr: '',
        hjemmesideNavn: 'Min hjemmeside',
    });
    return (
        <div style={ { margin: '40px'} }>
            <h2>Href</h2>
            <form style={ { marginBottom: '40px' } }>
                <label htmlFor="navn">Fult navn</label>
                <input
                    id="navn"
                    style={ {
                        display: 'block',
                        height: '25px',
                        border: '1px solid #aaa',
                        borderRadius: '7px',
                        width: '300px'
                    } }
                    onChange={ (e) => setIputText({ ...inputText, navn: e.target.value }) }
                    value={ inputText.navn }
                    placeholder="Ditt navn"
                />
                <label htmlFor="adresse">Adresse</label>
                <input
                    id="adresse"
                    style={ {
                        display: 'block',
                        height: '25px',
                        border: '1px solid #aaa',
                        borderRadius: '7px',
                        width: '300px'
                    } }
                    onChange={ (e) => setIputText({ ...inputText, adresse: e.target.value }) }
                    value={ inputText.adresse }
                    placeholder="Skriv noe pent"
                />
                <label htmlFor="telefon">Telefonnummer</label>
                <input
                    id="telefon"
                    style={ {
                        display: 'block',
                        height: '25px',
                        border: '1px solid #aaa',
                        borderRadius: '7px',
                        width: '300px'
                    } }
                    onChange={ (e) => setIputText({ ...inputText, telefon: e.target.value }) }
                    value={ inputText.telefon }
                    placeholder="Telefonnummer"
                />
                <label htmlFor="hjemmeside">Hjemmeside - navn </label>
                <input
                    id="hjemmeside"
                    style={ {
                        display: 'block',
                        height: '25px',
                        border: '1px solid #aaa',
                        borderRadius: '7px',
                        width: '300px'
                    } }
                    onChange={ (e) => setIputText({ ...inputText, hjemmesideNavn: e.target.value }) }
                    value={ inputText.hjemmesideNavn }
                    placeholder="adresse til din hjemmeside"
                />
                <label htmlFor="hjemmesideAdr">Hjemmeside - adresse</label>
                <input
                    id="hjemmesideAdr"
                    style={ {
                        display: 'block',
                        height: '25px',
                        border: '1px solid #aaa',
                        borderRadius: '7px',
                        width: '300px'
                    } }
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
                <strong>Hjemmeside: </strong><a href={inputText.hjemmesideAdr}>{inputText.hjemmesideNavn}</a><br />
            </div>
        </div>
    )
}