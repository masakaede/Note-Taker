const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

//Api Routes
app.get("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "db/db.json"));
});

app.post("api/notes", function (req, res) {
    fs.writeFile(path.join(__dirname, "db/db.json"));
});



app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT)
})