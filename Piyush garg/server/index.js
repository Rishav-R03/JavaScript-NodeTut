const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
//    console.log(req);
    const log = `${Date.now()}: ${req.url}: New Request Received\n`;
    // res.end('hello world');
    fs.appendFile('log.txt',log,(err,data)=>{ 
        if (err) throw err
        // console.log(data);
        switch(req.url){
            case '/':
                res.end("hello");
                break;
            case '/intro':
                res.end("I am Rishav");
                break;
            case '/about':
                res.end("pre-final year student");
                break;
            default:
                res.end("404 not found");   
        }

        //async non blocking
        // res.end("hello again!")
    })
});

server.listen(8000,()=>{
    // console.log(req.h)
    console.log(`server is running on port 8000`);
})