var express = require("express");
var path = require("path");

var app = express();
var PORT = 3010;

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
    res.sendFile(path.join(__dirname, "frontpage.html"));
});

app.get("/ReservationList", function (req, res) {
    res.sendFile(path.join(__dirname, "list.html"));
});

app.get("/MakeAReservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitinglist", function (req, res) {
    return res.json(waitList);
});

app.post("/api/tables", function (req, res){
    var newReservation = req.body;
    console.log(newReservation)

    if(reservations.length < 5){
        reservations.push(newReservation)
        
    }else{
        waitList.push(newReservation)
    }

    res.json(newReservation);
});

