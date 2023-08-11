const express = require("express");
const app = express();
app.get("/", (req, rep)=>{
    rep.end("hello, world")
})
app.get("/home", (req, rep)=>{
    rep.end("this is home!")
})
app.listen(3000, ()=>{
    console.log("server on: http://localhost:3000/")
})