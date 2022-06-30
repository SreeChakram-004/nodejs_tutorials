const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


//middlewares
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes 
app.get('/', function(req, res) {
    res.send("Hey Buddy")
});

//handlebars Setting
app.set("view engine","hbs");
app.engine("hbs",exphbs({
    extname: "hbs",
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}))

//listening port
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`server running on ${port}`);