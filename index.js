const express =require("express");
const app=express();
const port=process.env.PORT || 4000;
app.get("/data",(req,res)=>{
    console.log("got requst from client");
    res.json();
});
app.listen(port);
console.log(`listening on port ${port}`);