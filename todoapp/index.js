import express from 'express' 
import {conn} from './db.js'
import cors from 'cors';

const app = express()

// middleware
app.use(express.json())
app.use(cors());

// connect to database
conn.connect()
    .then(()=> console.log("Connected to db"))
    .catch(err => console.log("database connection error"))


app.get('/',(req,res)=>{
    res.send('Welcome to todo application')
})

app.get('/fetchAll',(req,res)=>{
    const {taskid,title,decription,created_at,updated_at,iscompleted} = req.params
    const fetchAllQuery = 'SELECT * FROM todoapptable'
    conn.query(fetchAllQuery,(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            console.log("fetched all rows!")
            res.status(200).json(result.rows)
        }
    })
})

app.post('/postTask',(req,res)=>{
        // const {taskid,title,description,iscompleted} = req.body 
        const postTaskQuery = `INSERT INTO todoapptable (taskid,title,description,iscompleted) VALUES ($1,$2,$3,$4)`
        conn.query(postTaskQuery,[taskid,title,description,iscompleted],(err,result)=>{
            if(err){
                res.send(err)
                res.status(500).send("error inserting task")
            }
            else{
                res.status(201).send("Task added",result)
            }
        })
})

app.put('/updateTask/:taskid',(req,res)=>{
    const taskid = req.params.taskid 
    const {title,description,iscompleted} = req.body
    const updateQuery = `UPDATE todoapptable SET title = $1, description = $2, iscompleted = $3 WHERE taskid = $4`
    conn.query(updateQuery,[title,description,iscompleted,taskid],(err,result)=>{
        if(err){
            res.status(500).send("Error updating task")
        }else{
            res.status(200).send("Task updated successfully!")
        }
    })
})

app.delete('/deleteTask/:taskid',(req,res)=>{
    const taskid = req.params.taskid
    const deleteQuery = `DELETE FROM todoapptable WHERE taskid = $1`
    conn.query(deleteQuery,[taskid],(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(3000,()=>{
    console.log(`Server started at port http://localhost:3000`)
})