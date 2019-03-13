const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});
app.get("/signup.html", function(req, res) {
    res.sendFile(__dirname + "/success.html");
});
app.get("/signup.html", function(req, res) {
    res.sendFile(__dirname + "/failure.html");
});
app.post("/", function(req, res) {
    var firstName = req.body.fName;
    var secondName = req.body.sName;
    var email = req.body.eMail;


    console.log(firstName, secondName, email);
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});