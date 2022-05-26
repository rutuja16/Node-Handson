//docuentation
//https://www.npmjs.com/package/bcrypt
//npm i bcrypt
const bcrypt=require('bcrypt');

//https://www.npmjs.com/package/jsonwebtoken
//npm i jsonwebtoken
const jwt=require("JsonWebToken")

const encryptPassword=(req,res,next)=>{
    const myPlaintextPassword=req.body.Password;
    const saltRounds=8//saltRound means how many time the algorithm has run to hash your password.(any value)
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash)
        req.body.Password=hash;
        next();//here it will simply pass to next function or move to next controller
    });
    //dont add next() here because this callback take some time to run
    
}


// const authenticateMiddleware=(req,res,next)=>{

//     //send data in 3 different way: 1.url  2.headers  3.body
//     const headers=req.headers;
//     console.log(headers);

//     if(headers.authorization){
//         // verify a token symmetric(pass token secretkey and function)
//     jwt.verify(headers.authorization, process.env.SECRET, function(err, decoded) {
//         if(err){
//             res.json({
//                 status:"Fail",
//                 code:404,
//                 message:"Wrong Token or Token mulform"
//             })
//         }
//         else{
//             res.json({
//                 status:"Success",
//                 code:404,
//             })
//             next();
//         }
//     });
//     }
//     else{
//         res.json({
//             status:"Success",
//             code:404,
//             message:"Forbidden ! You are not allowed to access the resource"
//         })
//     }
    
// }

module.exports={encryptPassword}