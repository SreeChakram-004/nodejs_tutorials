const express = require("express");

const router = express.Router();
const users = [
  {
    firstname: "john",
    lastname: "doe",
    age: "25",
  }
];
router.get("/users", (req, res) => {
  console.log(users);
  res.send("Hello");
});

router.post("/post",(req,res)=>{
    const user = req.body;
    users.push(user);
    res.send(`User with the username ${user.firstname}`);
})

module.exports = router;
