# Middleware

### Middleware are like any general functions which takes in three parameters as request, response and next function.
### These middleware are used to execute some function before the response is send back to the client. 
### It mostly gets used for the authentication, that before we send the response, we can authenticate if the API request is called from the client with proper user credentials or not.
### These middleware can be applied on the whole application level as well as on one particular API route.
### next() function is very important, after the end of each middleware we should execute next function so that the program execution can move either to next middleware or to main route, if this function is not added then execution will not move forward.

    /*
    In this we have written a function named middleware1, this is working as middleware, it takes in 3 arguments req, res, next.
    app.use(middleware1), this will apply the middleware on the whole application.
    */
    
const middleware1 = (req, res, next)=>{

    console.log("Middleware 1");
    
    next()
    
}

// app.use(middleware1);

## Commands:

    npm init --y to create package.json file
    npm install express
    npm install nodemon -g

To run code :
Node server.js

Localhost:3000
