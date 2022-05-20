/*Que : Create two middlewares one should be applicable to all the routes present in backend application 
        is containing and other should be applicable to any 2 specific routes */
/* 
    Middleware
    # Middleware are like any general functions which takes in three parameters as request, response and next function.
    # These middleware are used to execute some function before the response is send back to the client. 
    # It mostly gets used for the authentication, that before we send the response, we can authenticate if the API request is called from the client with proper user credentials or not.
    # These middleware can be applied on the whole application level as well as on one particular API route.
    # next() function is very important, after the end of each middleware we should execute next function so that the program execution can move either to next middleware or to main route, if this function is not added then execution will not move forward.

*/
const express=require("express")

const app=express();

const port=3000;

/*
In this we have written a function named middleware1, this is working as middleware, it takes in 3 arguments req, res, next.
app.use(middleware1), this will apply the middleware on the whole application.
*/
const middleware1 = (req, res, next)=>{
    console.log("Middleware 1");
    next()
}
// app.use(middleware1);

app.get("/",middleware1,(req,res)=>{
    res.send("<h1>Main page with middleware1 </h1>")
})

const middleware2 = (req, res, next)=>{
    console.log("Middleware 2");
    next()
}

//application level middleware

app.use(middleware2);

//create app routes



app.get("/Page1",middleware1,(req,res)=>{
    res.send("<h1>Page 1 with middlware1 and Middleware2</h1>")
})
app.get("/Page2",(req,res)=>{
    res.send("<h1>Page 2 with middlware2</h1>")
})

app.get("/Page3",(req,res)=>{
    res.send("<h1>Page 3 with middlware2</h1>")
})

app.get("/Page4",(req,res)=>{
    res.send("<h1>Page 3 with iddlware2</h1>")
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})
