const express = require('express');
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("Users list");
})

router.get("/new",(req,res)=>{
    res.send("User new form");
})

router.post("/",(req,res)=>{
    res.send("create user");
})

router.route("/:id").get((req,res)=>{console.log(req.user)
     res.send(`Get the user ${req.params.id}`)}).put((req,res)=>{
    res.send(`update the user ${req.params.id}`)
}).delete((req,res)=>{
    res.send(`Delete the user ${req.params.id}`)
});

const users = [{name: "kyle"},{name:"sally"}]
router.param("id",(req,res,next,id)=>{
    req.user =users[id]
    next();
})

module.exports = router;