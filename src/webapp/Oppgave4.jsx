import React, { useState } from 'react';
import { getOppgave4InfoText } from './infoTexts';
import './webapp.css';

export default () => {
    const [input, setInput] = useState('');
    const [svar, setSvar] = useState('');
    // eslint-disable-next-line
    const gjest = {
        navn: 'Jeg går under mange navn. Blandt disse finner du Harald V, Harald Rex pg Kong Harald.',
        alder: 'Jeg er 83år p.t',
        yrke: 'Jeg er din konge',
        adresse: 'Adressen min er Slottsplassen 1, 0010 Oslo.. Altså på slottet.',
    };

    const getSvaret = () => {
        // eslint-disable-next-line
        { input && setSvar(eval('gjest.' + input )) }
    };

    return (
        <>
            <h2>Oppgave 4</h2>
            { getOppgave4InfoText() }

            <input
                className="input"
                onChange={ (e) => setInput(e.target.value) }
                value={ input }
                placeholder="Hva lurer du på om meg?"
            />
            <button type="button" onClick={ getSvaret }>Spør</button>
            <strong>Svaret er:</strong>
            { svar }

        </>

    )
}

