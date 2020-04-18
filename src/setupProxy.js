const express = require("express");

/**
 * Vi later som at dette er backend.
 */
module.exports = function (app) {
    app.use(express.json());

    /**
     * Brukes i npm-oppgave
     */

    let chat = { messages: [] };

    app.post("/api/message", (req, res) => {
        chat.messages.push(req.body);
        res.send("ok");
    });

    app.get("/api/messages", (req, res) => {
        res.send(chat);
    });
};
