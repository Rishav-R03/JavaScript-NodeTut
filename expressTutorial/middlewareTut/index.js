import express from 'express'
const app = express() 
const router = express.Router()

/**
 * Middlewares are of 4 kinds 
 * Application level 
 * Third party middleware
 * Router-level middleware
 * Built-in middleware 
 * Error-handling middleware (works at application level or router level)
 */


// application level middelware 
const loggerMiddleware = (req,res,next) =>{
    console.log(`${new Date()}---Request [${req.method}] [${req.url}]`)
    next()
}

//router level middleware 
const fakeAuth = (req,res,next) =>{ // is a middleware
    const authStatus = false;
    if(authStatus){
        console.log("User is authorized!")
        next() 
    }
    else{ 
        res.status(401);
        throw new Error("User is not authorized!")
    }
}

app.use(loggerMiddleware)
app.use("/api/users",router)
const getUsers = (req,res)=>{
    res.json({message:"get user"})
}
const createUser = (req,res)=>{
    res.json({message:"create new user"})
}
router.use(fakeAuth)
router.route("/").get(getUsers).post(createUser)

//error handler middleware 
const errorHandler = (err, req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    switch (statusCode){
        case 401:
            res.json({
                title:"Unauthorized",
                message:err.message
            })
            break;
        case 404:
            res.json({
                title:"Not found",
                message:err.message
            })
            break;
         case 500:
            res.json({
                title:"Server error",
                message:err.message
            })
            break;
        
        default:
            break;
    }
}

app.use(errorHandler)

app.listen(3000,(req,res)=>{
    console.log(`server running on http://localhost:3000`)
})

