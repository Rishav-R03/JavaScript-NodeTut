console.log("hello world");

const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/twitter',(req,res)=>{
    res.send('Hello Twitter');
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at my portfolio </h1>');
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
