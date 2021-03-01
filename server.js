var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/newmessage", function (req, res) {
    res.sendFile(__dirname + "/public/form.html");
});


app.post("/newmessage", function (req, res) {
    var data = require("./public/data.json");
    var today = new Date();

    var date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();

    data.push({
        "Name": req.body.name,
        "Country": req.body.country,
        "Message": req.body.message,
        "Date": date
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile("public/data.json", jsonStr, (err) => {
        if (err) throw err;
        console.log("It is saved!");
    });

    res.send("Saved to the file");
});


app.get("/guestbook", function (req, res) {
    var data = require("./public/data.json");

    var results ="<table border='1'><tr><th>Name</th><th>Country</th><th>Message</th><th>Date</th></tr>";
    for (var i=0; i<data.length; i++){
        results +=
        "<tr>"+
        "<td>"+data[i].Name+"</td>"+
        "<td>"+data[i].Country+"</td>"+
        "<td>"+data[i].Message+"</td>"+
        "<td>"+data[i].Date+"</td>"+
        "</tr>";
    }
    res.send(results);
});

app.listen(8081, function () {
    console.log("Example app listening on port 8081!");
});