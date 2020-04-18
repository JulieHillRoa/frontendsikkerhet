import React, { useState } from 'react';
import {getDangerouslySetInnetHtmlInfoText} from "./infoTexts";

export default () => {
    const [inputText, setIputText] = useState('');

    return (
        <div style={ { margin: '40px'} }>
            <h2>eval()</h2>
            { getDangerouslySetInnetHtmlInfoText() }

            <input
                style={ {
                    height: '25px',
                    border: '1px solid #aaa',
                    borderRadius: '7px',
                    width: '300px'
                } }
                onChange={ (e) => setIputText(e.target.value) }
                value={ inputText }
                placeholder="Skriv noe pent"
            />
            <div dangerouslySetInnerHTML={ {"__html": inputText}} />
        </div>
    )
}