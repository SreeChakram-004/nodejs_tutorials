const express = require('express');
const bodyParser = require('body-parser');
const routings = require('./routes/user');

const app = express();
const PORT = 5000;


//middlewares
app.use(bodyParser.json());
app.use('/',routings);


//routes
app.get('/',(req,res)=>{
    res.send('Welecome to Avyata Pvt Ltd')
})


//listening port
app.listen(PORT,()=>{console.log(`listening port ${PORT}`)});