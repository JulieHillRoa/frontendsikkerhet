import React from "react";

export const getDangerouslySetInnetHtmlInfoText = () => (
    <>
        <div style={ {
            background: '#eee',
            marginBottom: '20px',
            maxWidth:"300px",
            minHeight: '20px',
            borderRadius: '7px',
            padding: '10px'
        } }>
            &lt;p id=&quot;avsnitt&quot;&gt;
                Ett avsnitt
            &lt;/p&gt;
        </div>
        Basert på bruker handling kan man bytte innholdet i dette p-elemtet ved hjelp av innerHTML:
        <div style={ {
            background: '#eee',
            marginBottom: '20px',
            maxWidth:"700px",
            minHeight: '20px',
            borderRadius: '7px',
            padding: '20px'
        } }>
            document.getElementById("myParagraph").innerHTML = "Dette er et annet avsnitt";
        </div>

        Ved å sette dangerouslySetInnerHTML-propertien i React vil det si å sette innerHTML og propertien er kalt akkurat dette for en grunn.<br />
        Denne metoden å endre innhold på er utsatt for XSS-angrep.

        <span style={ {margin: '20px 0', display: 'block' } }>
            Ta en titt på koden og prøv å hack dette inputfeltet
            ved å få den til å kjøre et script, f.eks alert()
        </span>
    </>
);