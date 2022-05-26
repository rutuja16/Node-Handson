const express=require("express")

const app=express();

const port=process.env.PORT || 8080;

const authRouter=require("./routes/auth.route")

//middleware
const cors=require("cors")
app.use(cors())

app.use(express.json());//to display json data

app.use("/auth",authRouter)

app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})