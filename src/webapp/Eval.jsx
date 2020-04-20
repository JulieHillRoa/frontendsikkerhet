import React, { useState } from 'react';
import { getEvalInfoText } from './infoTexts';
import './webapp.css';

export default () => {
    const [input, setInput] = useState('');
    // eslint-disable-next-line
    const gjest = {
        navn: 'Jeg går under mange navn. Blandt disse finner du Harald V, Harald Rex pg Kong Harald.',
        alder: 'Jeg er 83år p.t',
        yrke: 'Jeg er din konge',
        adresse: 'Adressen min er Slottsplassen 1, 0010 Oslo.. Altså på slottet.',
    };

    return (
        <>
            <h2>eval()</h2>
            { getEvalInfoText() }

            <input
                className="input"
                onChange={ (e) => setInput(e.target.value) }
                value={ input }
                placeholder="Spør meg om noe"
            />
            { console.log(input)}

            <strong>Svaret er:</strong>
            {/* eslint-disable-next-line */}
            { input && eval('gjest.' + input) }

        </>
    )
}

//navn" 'alert(\'hello I am coming from eval() method!\')