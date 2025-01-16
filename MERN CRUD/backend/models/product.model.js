import mongoose from "mongoose";
// import { type } from './../../node_modules/nodemon/index.d';

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},{timestamps:true})

const Product = mongoose.model("Product",productSchema);
export default Product;