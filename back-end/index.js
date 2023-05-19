const express = require( "express");
const port = 8000;
const app = express();

    app.get("/", (req, res) => {
        res.send( "Get request is successfully.");
    });

    app.post("/", (req, res) => {
        res.send("Post request is successfully.");
    });

    app.put("/", (req, res) => {
        res.send( "Put request is successfully.");
    });

    app.delete("/", (req, res) => {
        res.send( "Delete request is successfully.")
    });

    app.listen(port, () => {
        console.log( `Server is running at localhost:${port}`);
});