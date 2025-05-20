import express from 'express'
import conn from './db.js'

conn.connect()
    .then(()=> console.log(`database connected!`))
    .catch(err=> console.log(`unable to reach database check credentials!`))

const app = express() 

app.get("/",(req,res)=>{
    res.status(201).send("Welcome Page for Notes API!");
})



app.listen(3000,()=>{
    console.log(`server running at http://localhost:3000`) 
})

