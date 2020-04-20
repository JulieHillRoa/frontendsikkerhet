import React, {useState} from 'react';
import {} from "./infoTexts";

export default () => {
    const [inputText, setIputText] = useState();

    return (
        <div style={ { margin: '40px' } }>
            <h2>DangerouslySetInnerHTML</h2>
            <div style={ { display: 'flex', flexDirection: 'row' } }>
                <textarea
                    style={ {
                        height: '700px',
                        border: '1px solid #aaa',
                        borderRadius: '7px',
                        width: '600px',
                        marginRight: '30px',
                    } }
                    onChange={ (e) => setIputText(e.target.value) }
                    value={ inputText }
                    placeholder="Skriv noe HTML og se hvordan siden blir bygget opp"
                />
                <div
                    style={ { height: '700px', width: '600px' } }
                    { ...inputText }
                />
            </div>
        </div>
    )
}