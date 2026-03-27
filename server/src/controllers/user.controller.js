const { model } = require("mongoose")
const userModel= require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt= require("jsonwebtoken")
module.exports.registerUser=async (req,res)=>{
const {username,email,password}=req.body
//if there is no username email password and empty field
if(!username || !email || !password ){ 
     return res.status(400).json({message:"please provide username, email and password"})

}
//if user is already exits
const IsUserAlreadyExits= await userModel.findOne({
    $or:[{username},{email}]
})


if(IsUserAlreadyExits){
    return res.status(400).json({message:"Account already exits with this email address or username"})
}

const hash= await bcrypt.hash(password,10)


const user= await userModel.create({
    username,
    email,
    password
})

const token = jwt.sign({id:user._id,username:user.username},process.env.JWT_SECRET,{expiresIn:"1d"} )

res.cookie("token",token)

res.status(201).json({message:"user created successfully",user})
}