import React, {useState} from "react";
import Href from "./Href";
import SpreadProps from "./SpreadProps";
import DangerouslySetInnerHtml from "./DangerouslySetInnerHTML";
import Eval from "./Eval";

const EVAL = 'eval';
const PROPS = 'spareadProps';
const DANGEROUSLY_SET = 'dangerouslySetInnerHtml';
const HREF = 'Href.jsx';

const getPage = (page) => {
    switch (page) {
        case HREF:
            return <Href />;
        case PROPS:
            return <SpreadProps />;
        case DANGEROUSLY_SET:
            return <DangerouslySetInnerHtml />;
        case EVAL:
            return <Eval />
        default:
            return null;
    }
};


export default () => {
    const [page, setPage] = useState(HREF);

    return (
        <>
            <h1>Utvikling av moderne web applikasjoner</h1>
            <ul style={ {
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row'
            } }>
                <li><button onClick={ () => setPage(HREF) }>href</button></li>
                <li><button onClick={ () => setPage(EVAL) }>eval()</button></li>
                <li><button onClick={ () => setPage(DANGEROUSLY_SET) }>dangerouslySetInnerHTML</button></li>
                <li><button onClick={ () => setPage(PROPS) }>Spread props</button></li>
            </ul>

            { getPage(page)}
        </>
    );
}