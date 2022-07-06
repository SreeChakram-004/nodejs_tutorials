const express = require('express');
const users = require('./users.json');

const router = express.Router();
router.get('/companyMembers',(req, res)=>{
    res.json(users);
})

router.post('/companyPosts',(req,res)=>{
    res.send(`New thing posted to Avyata Pvt Ltd`)
});

module.exports = router;