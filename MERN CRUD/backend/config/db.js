import mongoose from "mongoose";
export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.log(`error: ${error.message}`);
        process.exit(1); //1 means a failer 0 means sucess
    }
}