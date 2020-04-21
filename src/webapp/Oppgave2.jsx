import React, { useState } from 'react';
import { getOppgave2InfoText } from './infoTexts';
import './webapp.css';

export default () => {
    const [inputText, setIputText] = useState('');

    return (
        <>
            <h2>Oppgave 2</h2>
            { getOppgave2InfoText() }

            <div className="flexContainer">
                <textarea
                    className="textArea"
                    onChange={ (e) => setIputText(e.target.value) }
                    value={ inputText }
                    placeholder="Skriv noe HTML og se hvordan siden blir bygget opp"
                />
                <div
                    className="siteArea"
                    dangerouslySetInnerHTML={ {"__html": inputText } }
                />
            </div>

        </>
    )
}

