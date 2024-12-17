const express= require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("home page")
});
app.post();
app.put();
app.delete();

const port=4000

app.listen(port,()=>{
    console.log(`server is running in port${port}`);
    
});