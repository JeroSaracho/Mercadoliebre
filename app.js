const express = require("express");
const path = require("path");
const { dirname } = require("path");

const app = express();

let PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server funciona en " + PORT));

app.use(express.static("public"));


app.get("/", (req, res) => {

    res.sendFile(path.resolve("./views/home.html"))

});

app.get("/login", (req, res) => {

    res.sendFile(path.resolve("./views/login.html"))

});
app.get("/register", (req, res) => {

    res.sendFile(path.resolve("./views/register.html"))

});




