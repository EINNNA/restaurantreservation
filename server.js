var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

var reservations = [];
var waitList = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/waitlist", function (req, res) {
    res.sendFile(path.join(__dirname, "wait.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});
app.get("/api/waitinglist", function (req, res) {
    return res.json(waitList);
});