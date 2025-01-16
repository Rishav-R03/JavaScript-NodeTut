import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
// import mongoose from "mongoose";
import Product from "./models/product.model.js";

const app = express()
dotenv.config();
console.log(process.env.DB_URL)
app.use(express.json());

app.post("/api/products",async (req,res)=>{
    // res.send("Product page")
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        res.status(400).json({sucess:false,message:"Please provide all fields"});
    }
    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({sucess:true,data:newProduct});
    }catch(error){
        res.status(500).json({sucess:false,message:"Internal server error"});
    }
})
app.listen(5000,()=>{
    connectDB();
    console.log("server is running on port 5000");
})