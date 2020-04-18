import React from "react";

export const OrderButton = ({ href = "/npm/bestill" }) => {
    return <a className="button" href={href}>Send bestilling</a>;
};
