import mongoose from "mongoose";
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
    },
},
{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);
//P is capital and in singular form because mongodb will 
//make it lowercase and plural form.
export default Product;