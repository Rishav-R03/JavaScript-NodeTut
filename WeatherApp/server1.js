import express from "express"
import path from  "path"
import fs from "fs"
const path = require("path")
const dirPath = path.join(__dirname,'/public')
const app = express()

app.get("/",(req,res)=>{
    res.sendFile(__dirname + )
})