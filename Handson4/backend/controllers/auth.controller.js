require("dotenv").config();
const Users=require("../storage/db")

//docuentation
//https://www.npmjs.com/package/bcrypt
//npm i bcrypt
const bcrypt=require('bcrypt');

//https://www.npmjs.com/package/jsonwebtoken
//npm i jsonwebtoken
var jwt = require('jsonwebtoken');


const LoginController = (req,res)=>{
    const Email=req.body.Email;
    const Password=req.body.Password;

    //search user from the array
    const User = Users.find(ele=>ele.Email==Email)
    //console.log(User);

    if(User){//in if  condition is true the run this block of code
        console.log("user Found")
        bcrypt.compare(Password, User.Password, function(err, result) {
            console.log("Result",result);
            if(result==true){
                //generating token
                //syntax : var token = jwt.sign({ foo: 'bar' }, 'shhhhh');//shhhhh is a secret key
                var token = jwt.sign({ Email: Email }, process.env.SECRET);//pass non important/non sensitive info. here
                
                res.json({
                    status:"Success",
                    code:200,
                    message:"Logged in successfully",
                    token:token
                })
                console.log("Logged in successfully")

                //to decode token
                //https://jwt.io  --copy token from postman in /login and paste into this site.
            }
            else{
                console.log("Wrong Password")
                res.json({
                    status:"Fail",
                    code:400,
                    message:"wrong Password!",
                })
            }
        });
    }
    else{
        console.log('User Not found');
        res.json({
            status:"Fail",
            code:404,
            message:"User Not Found ",
        })
    }

    
    
}

const SignupController = (req,res)=>{
    const loaddata= Users.push(req.body);

    if (loaddata!="undefined") {
        console.log("User registration successfully completed")
        res.json({
            status:"Success",
            code:200,
            message:"User registration successfully completed",
            data:Users

        })
      } else {
          console.log("User has not registered, please try again")
        res.json({
            status:"Fail",
            code:400,
            message: "User has not registered, please try again",
        })
      }
    
}

const UserController = (req,res)=>{
    res.json({
        data:Users
    })
}

module.exports={
    LoginController,
    SignupController,
    UserController
}