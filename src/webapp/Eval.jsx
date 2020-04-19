import React, { useState } from 'react';
import { getEvalInfoText } from "./infoTexts";

export default () => {
    const [x] = useState(8);
    const [y] = useState(65);
    const [input, setInput] = useState('');

    const swapXandYWithValue = (calculation) => {
        return calculation.toUpperCase().replace("X", `*${x}`).replace("Y", `*${y}`)
    };

    return (
        <div style={ { margin: '40px'} }>
            <h2>eval()</h2>
            { getEvalInfoText() }
            <div
                style={ {
                    background: 'rgb(65,108,87)',
                    border: '10px solid rgb(87, 54, 19)',
                    height: '500px',
                    width: '700px',
                    padding: '20px',
                } }
            >
                <p
                    style={ { fontFamily: 'Comic Sans MS", cursive, sans-serif', color: 'white', fontSize: '30px', } }
                >
                    X = {x}
                    <br/>
                    Y = {y}
                    <br/>
                    <br/>
                    {/* eslint-disable-next-line */}
                    3x + 2 = { eval(`3${x} + 2`) }
                    <br/>
                    {/* eslint-disable-next-line */}
                    3y + 188 = { eval(`3${y} + 188`) }
                </p>
                <input
                    style={ {
                        height: '35px',
                        border: '1px solid #aaa',
                        borderRadius: '7px',
                        width: '300px',
                        background: 'rgb(65,108,87)',
                        color: 'white',
                        fontSize: '30px',
                        fontFamily: 'Comic Sans MS", cursive, sans-serif',
                    } }
                    onChange={ (e) => setInput(e.target.value) }
                    value={ input }
                    placeholder="Skriv noe pent"
                />
                <p
                    style={ { fontFamily: 'Comic Sans MS", cursive, sans-serif', color: 'white', fontSize: '30px', } }
                >
                    {/* eslint-disable-next-line */}
                    = { eval(swapXandYWithValue(input)) }
                </p>
            </div>
        </div>
    )
}