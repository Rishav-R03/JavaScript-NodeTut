import express from 'express'
import {z} from 'zod'
import bcrypt from 'bcrypt'
import conn from './db.js'
import morgan from 'morgan'

conn.connect()
    .then(()=>console.log(`db connected!`))
    .catch(err=>console.log('error connecting db',err.message))

const app = express();
app.use(morgan('dev'))

// schemas 
// #1 signup 
const signupSchema = z.object({
    name: z.string().min(1,'name is required!'),
    email:z.string().email('invalid email'),
    password:z.string().min(6,'password must be 6 chars long')
})



//signup end point 
app.post('/signup',async (req,res)=>{
    try{
        const {name,email,password} = signupSchema.parse(req.body);
        // hash the password 
        const hashedPassword = await bcrypt.hash(password,10);
        //insert into db 
        const signupQuery = 'INSERT INTO signup_table (name,email,password) VALUES ($1,$2,$3) RETURNING id,name,email'
        //run query 
        const result = await conn.query(signupQuery,[name,email,hashedPassword])

        return res.status(201).json({
            message:"signup successfull",
            user:result.rows[0]
        });
    }
    
    catch(err){
        if(err.name==='zod error!'){
            return res.status(400).json({error:err.message})
        }
        if(err.code === '23505'){
            return res.status(409).json({message:"email already exist!"})
        }
        console.log('signup error!',err.message);
        return res.status(500).send("Internal server error!")
    }
})


//public route
app.get('/',(req,res)=>{
    res.status(201).send(`Welcome to home page!`)
})


app.listen(3000,()=>{
    console.log(`server running at port http://localhost:3000`)
})