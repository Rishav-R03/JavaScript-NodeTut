import express from "express";

const app = express(); // creating an instance of express

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{
    res.send("This is about page");
})
app.post("/register",(req,res)=>{
    res.send("This is register page");
})
app.put("/login",(req,res)=>{
    res.send("This is a put request");
})

app.delete("/delete",(req,res)=>{
    res.send("This is a delete request");
})

app.listen(3000,()=>{
    console.log(`Server is running on port ${3000}`);
})

app.all('/secret',(req,res,next)=>{
    console.log("Accessing secret");
    next(); // pass control to the next handler / middleware
})

app.get('/users/:userId/books/:bookId',(req,res)=>{
    console.log(req.params);
    res.send("user id is "+req.params.userId+" and book id is "+req.params.bookId);
})