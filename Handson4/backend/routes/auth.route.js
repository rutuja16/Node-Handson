const express=require("express");

const authRouter=express.Router();

const {LoginController,SignupController,UserController} = require("../controllers/auth.controller")//callback function
const {encryptPassword}=require("../middlewares/auth.middleware")//middleware

authRouter.post("/login",LoginController)
authRouter.post("/signup",encryptPassword,SignupController)
authRouter.get("/users",UserController)

module.exports=authRouter;