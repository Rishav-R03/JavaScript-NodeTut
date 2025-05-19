import express from 'express'
import morgan from 'morgan'
import ratelimit from  'express-rate-limit'

const app = express() 
const router = express.Router()
const limit = ratelimit({ // similarly you can build rate limit for specific routes
    windowMs: 15 * 60 *1000,
    max:5,
    message:"Too many requests try again after 15 min"
})


app.use(limit)

// #1 application level middleware 
app.use(express.json())

// #2 third party middleware 
app.use(morgan('dev'))
// or app.use(morgan(`:method :url :host`))
// or app.use(morgan(`:method :url`)) shows only  the method and url in console

// #3 custom application level middleware 
const loggerMiddleware = (req,res,next)=>{
    console.log(`[custom logger] with request method ${req.method} time ${new Date()} path is ${req.path}`)
    next()
}
app.use(loggerMiddleware)

// public route 
app.get("/",(req,res)=>{
    res.json({
        message:"Hello and welcome to Home page!"
    })
})
// #4. route level 
const chechAuth = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token === 'Bearer secrettoken123'){
        next();
    }else{
        res.status(401).json({message:"Unauthorization access"});
    }
}

// protected route 
app.get('/dashboard',chechAuth,(req,res)=>{
    res.send('Welcome to your dashboard!');
})

// route that used parsed json body 

app.post('/postData',(req,res)=>{
    console.log('received data: ',req.body);
    res.json({
        message:"below is json we received!",
        data: req.body
    })
})

// #5 error handling middleware

app.use((err,req,res,next)=>{
    console.err('Error',err.stack);
    res.status(500).json({message:'Something went wrong!'});
})

// start the server
app.listen(3000,()=>{
    console.log(`server listening on http://localhost:3000`)
})