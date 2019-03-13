const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/success.html");
});
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/failure.html");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});