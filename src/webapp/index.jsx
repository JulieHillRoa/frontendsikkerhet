import React, {useState} from 'react';
import Oppgave1 from './Oppgave1';
import Oppgave2 from './Oppgave2';
import Oppgave3 from './Oppgave3';
import Oppgave4 from './Oppgave4';
import Oppgave5 from './Oppgave5';

const OPPGAVE1 = 'oppgave1';
const OPPGAVE2 = 'oppgave2';
const OPPGAVE3 = "oppgave3";
const OPPGAVE4 = 'oppgave4';
const OPPGAVE5 = 'oppgave5';

const getPage = (page) => {
    switch (page) {
        case OPPGAVE1:
            return <Oppgave1 />;
        case OPPGAVE2:
            return <Oppgave2 />;
        case OPPGAVE3:
            return <Oppgave3 />;
        case OPPGAVE4:
            return <Oppgave4 />;
        case OPPGAVE5:
            return <Oppgave5 />;
        default:
            return null;
    }
};


export default () => {
    const [page, setPage] = useState(OPPGAVE1);

    return (
        <div id="webappBody">
            <h1>Utvikling av moderne web applikasjoner</h1>
            <ul className="nav">
                <li><button onClick={ () => setPage(OPPGAVE1) }>Oppgave1</button></li>
                <li><button onClick={ () => setPage(OPPGAVE2) }>Oppgave2</button></li>
                <li><button onClick={ () => setPage(OPPGAVE3) }>Oppgave3</button></li>
                <li><button onClick={ () => setPage(OPPGAVE4) }>Oppgave4</button></li>
                <li><button onClick={ () => setPage(OPPGAVE5) }>Oppgave5</button></li>
            </ul>
            { getPage(page) }
        </div>
    );
}