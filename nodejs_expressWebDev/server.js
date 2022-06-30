const express = require('express');
const app = express();

const routings = require("./routes/users");


app.set("view engine","ejs");

app.use("/users", routings);
app.use(logger);
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    console.log("Here");
    res.render('index');
});

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}

app.listen(5000);
