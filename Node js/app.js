const express=require('express');
const app=express();

app.get("/",(req,res)=>
{
    res.send("<h1>Ashish</h1>");
})

app.get("*", (req, res) => {
    res.send("You are requesting a wrong url Ok");
})








app.listen(3000,()=>
{
    console.log("Server Start");
})