const express=require("express")

const path=require("path")

const port=3000;
const app=express();

app.get("/api/main",(req,res,next)=>{
    const filePath=path.join(__dirname +"/public/index.html") // the absolute path of my file

    //res.send();
    res.sendFile(filePath);
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})