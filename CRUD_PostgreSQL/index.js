import { Client } from "pg";
import express from 'express'

const app = express() 

app.use(express.json())

const conn = new Client({
  user: "postgres",
  host: "localhost",
  database: "restapidb", // <-- make sure to add this
  password: "root123",      // <-- add if required
  port: 5432,
});

conn.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err));


app.post('/postData',(req,res)=>{
    const {id,name} = req.body
    const insertQuery = 'INSERT INTO restapitable (id,name) VALUES ($1,$2)'
    conn.query(insertQuery,[id,name],(err,result)=>{
        if(err)
        {
            res.send(err)
        }else{
            console.log(result)
            res.send("POSTED DATA")
        }
    })
})

app.get('/getData',(req,res)=>{
    const {id,name} = req.params
    const getDataQuery = 'SELECT * FROM restapitable'
    conn.query(getDataQuery,(err,result)=>{
        if(err){
            // console.log(err)
            res.send(err)
        }
        else{
            console.log(result.rows)
            res.send("data retrieved!")
        }
    })
    
})

app.get('/getbyID/:Id',(req,res)=>{
    const Id = req.params.Id
    const getbyIdQuery = 'SELECT * FROM restapitable WHERE id=$1'
    conn.query(getbyIdQuery,[Id],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            console.log(`found the name with id ${Id}`)
            res.send(result.rows)
        }
    })
})
app.put('/updateData/:Id',(req,res)=>{
    const Id = req.params.Id 
    const {name} = req.body
    const updateQuery = 'UPDATE restapitable SET name=$1 WHERE id = $2'
    conn.query(updateQuery,[name,Id],(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log("updated the name")
            res.status(200).send(result.rows)
        }
    })
})

app.delete('/deleteData/:Id',(req,res)=>{
    const Id = req.params.Id 
    const deleteQuery = 'DELETE FROM restapitable WHERE id = $1'
    conn.query(deleteQuery,[Id],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            console.log("deleted successfully")
            res.send(result)
        }
    })
})

app.listen(3000,()=>{
    console.log(`server running on port 3000`)
})
