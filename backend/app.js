const express = require('express');
const port = 8080;
const app = express();




app.post("/p", (req,res)=>{
    console.log("working");
    res.send("working");
})














app.listen(port, console.log("Server Started Successfully"));