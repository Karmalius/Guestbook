// Määritellään palvelimen portti.
const PORT = process.env.PORT || 8081;

// Otetaan moduuleja käyttöön.
var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

// Otetaan body-parser käyttöön app-nimisessä express-sovelluksessa.
app.use(bodyParser.urlencoded({ extended: true }));

// Sisätlö haetaan public-hakemistosta.
app.use(express.static("./public"));

// Luodaan frontpage-reitti.
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// Luodaan newmessage-reitti.
app.get("/newmessage", function (req, res) {
    res.sendFile(__dirname + "/public/form.html");
});

// Lisätään dataa JSON tiedostoon.
app.post("/newmessage", function (req, res) {
    // Ladataan dataa JSON tiedostosta muuttujaan.
    var data = require("./public/data.json");
    // Määritellään päivämäärän haku.
    var today = new Date();
    var date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    // Luodaan JSON objekti ja lisätään se data-muuttujaan.
    data.push({
        "Name": req.body.name,
        "Country": req.body.country,
        "Message": req.body.message,
        "Date": date
    });
    // Muunnetaan JSON objekti tekstimuotoon.
    var jsonStr = JSON.stringify(data);
    // Kirjoitetaan data JSON tiedostoon.
    fs.writeFile("public/data.json", jsonStr, (err) => {
        if (err) throw err;
        console.log("It is saved!");
    });
    // Esitetään haluttu data.
    res.sendFile(__dirname + "/public/continue.html");
});

// Luodaan frontpage-reitti.
app.get("/ajaxmessage", function (req, res) {
    res.sendFile(__dirname + "/public/ajaxform.html");
});

// Lisätään dataa JSON tiedostoon.
app.post("/ajaxmessage", function (req, res) {
    // Ladataan dataa JSON tiedostosta muuttujaan.
    var data = require("./public/data.json");
    // Määritellään päivämäärän haku.
    var today = new Date();
    var date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    // Luodaan JSON objekti ja lisätään se data-muuttujaan.
    data.push({
        "Name": req.body.name,
        "Country": req.body.country,
        "Message": req.body.message,
        "Date": date
    });
    // Muunnetaan JSON objekti tekstimuotoon.
    var jsonStr = JSON.stringify(data);
    // Kirjoitetaan data JSON tiedostoon.
    fs.writeFile("public/data.json", jsonStr, (err) => {
        if (err) throw err;
        console.log("It is saved!");
    });
    // Tallennetaan dataa muuttujiin.
    var name = req.body.name;
    var country = req.body.country;
    var message = req.body.message;
    // Esitetään haluttu data.
    res.send("You send an AJAX message: " + message + ". You can now see it at the Guestbook!");
});

// Luodaan guestbook-reitti.
app.get("/guestbook", function (req, res) {
    res.sendFile(__dirname + "/public/guestbook.html");
});

// Luodaan web-palvelin.
app.listen(PORT, () => {
    console.log("Example app listening on port 8081!");
});