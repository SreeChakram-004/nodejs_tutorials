const express = require('express');
const app = express();


const port = process.env.PORT || 5000;


app.use("/",function(req, res ,next){
    console.log('request url :'+req.url);
    next();
})

//routes
app.get("/", function(req, res){
    res.send('<html> <head></head><body><h1>Hello World</h1></body></html>');
});

app.get("/api",function(req, res){
    res.json({firstname: 'John', lastname: 'Doe'})
});

app.get("/person/:id", function(req, res){
    res.send('<html> <head></head><body><h1>Person : '+ req.params.id +'</h1></body></html>');
});



app.listen(port);