const express = require('express');
const app = express();

const port = 5000;

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req, res){
    res.send('this is the contact page')
});

app.get("/profile/:name", function(req, res){
    res.send('Hey Mr.'+" "+ req.params.name)
});

app.listen(port);