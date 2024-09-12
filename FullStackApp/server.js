// const express = require("express");
import express from "express";
import Product from "./models/product.model.js";
const app = express();
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
//CqNdHn37Hp1ERHfa

app.get('/api/products',async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({sucess:true, data:products});
    }
    catch(err){
        console.error("Error in getting products: ", err.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
})

app.use(express.json()); //allows to us to accept json data from user to body
app.post('/api/products',async (req,res)=>{
    const product = req.body; //user will send this data
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({sucess:false, message:"Please fill all the fields"});
    }
    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(200).json({sucess:true, message:"Product added successfully"});
    }catch(err){
        console.error("Error in creating product: ", err.message);
        res.status(500).json({success:false, message:"Server Error"});
    }    
});

app.delete("/api/products/:id",async (req,res)=>{
    const {id} = req.params;
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({sucess:true, message:"Product deleted successfully"});
    }catch(err){
        console.error("Error in deleting product: ", err.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
})

app.put('/api/products/:id',async (req,res)=>{
    const {id} = req.params; //destructure id
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({sucess:false, message:"Product not found"});
    }
    try{
        const updatedProduct =await Product.findByIdAndUpdate(id, product,{new:true});
        res.status(200).json({sucess:true, data:updatedProduct});
    }
    catch(err){
        console.error("Error in updating product: ", err.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
})

app.listen(5000, () => {
    connectDB();
    console.log(`Server is running on port ${5000}`);
})