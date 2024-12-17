//import modules
const https=require("https");
const fs=require("fs");
const os=require("os");
const path=require("path");
//create server
const server =https.createServer((req,res)=>{
    if(req.url ==="/"){
        res.writeHead(200);
        res.end("home")
    }else if(req.url ==="/contact"){
        res.writeHead(200);
        res.end("contact")
    }else{
        res.writeHead(404);
        res.end("page not found");
    }

});
//server listening
const port=process.env.PORT || 8000;
server.listen(port,()=>{
console.log(`sever is running on ${port}`);

});