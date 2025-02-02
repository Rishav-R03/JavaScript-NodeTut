const express = require("express")
const path = require("path")
const app = express()
// adding a static template 

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"));
})
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})