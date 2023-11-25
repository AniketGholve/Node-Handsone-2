const express=require('express');
const app=express();
app.get("/api/main",(req,res)=>{
    res.send("NOde js is cross platform open source environment which is used to run the java script code outside the brouser ")
})

app.listen(5000,()=>{
    console.log("Server started at port 5000")
})