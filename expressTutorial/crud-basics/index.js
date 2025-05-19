import express from "express"
import { searchController,usernameController } from "./controller.js"
import router from '../router.js'
const app = express() 

const PORT = 3000 


//middleware 

app.use((req,res)=>{
    console.log("A new request received at " + Date.now())
    next()
})

// defining a route 
app.get('/',(req,res)=>{
    res.send("Home page")

})
//routes
//method (get,post,put,delete), endpoint, handler(function that handle the output of end point)
//routes types: dynamic, query strings
// 

app.get('/user/:username',usernameController)


// using middleware of express.json() is important to parse the information from json file
app.post('/users',express.json(),(req,res)=>{
    const {name,email} = req.body 
    res.json({message:`User with name ${name} and email ${email} created successfully!`
    }).status(200)
})

app.put('/users/:id',express.json(),(req,res)=>{
    const userId = req.params.id 
    const {name,email} = req.body
    res.json({
        message:`Update request was generated of name ${name} and with email ${email}`
    })
})
//search: /search?keyword=express
app.get('/search',searchController)

app.use('/user',router)

app.get('/about',(req,res)=>{
    res.send("This is an about page")
})

app.delete('/users/:id',(req,res)=>{
    const userid = req.params.id
    res.json({message:`delete request was raised for user id ${userid}`})
})

// using regex for input validation: app.get('/things/:name/:id([0-9]{5})',(req,res)=>{

app.get('/things/:name/:id',(req,res)=>{
    const {name,id} = req.params
    res.json({
        name,
        id
    }
    )
})

//middlewares
/**
 * Middle wares are the functions executed before final response sent by handler
 * req->middleware->route handler->response
 * 
 */


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})