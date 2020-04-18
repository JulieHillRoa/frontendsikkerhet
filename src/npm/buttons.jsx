import React from "react";

export const HelpButton = ({ href = "/npm/hjelp" }) => {
    return <a className="button" href={href}>Hjelp</a>;
};
