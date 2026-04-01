const { model } = require("mongoose");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenBlacklistModel= require("../models/blacklist.model")
//to register users
module.exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  //if there is no username email password and empty field
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "please provide username, email and password" });
  }
  //if user is already exits
  const isUserAlreadyExits = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExits) {
    return res
      .status(400)
      .json({
        message: "Account already exits with this email address or username",
      });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password:hashed
  });

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({ message: "user registered successfully", user });
};


//login user

module.exports.loginUser= async(req,res)=>{

    const {email,password}=req.body

    const user= await userModel.findOne({email})

    if(!user){
        return res.status(400).json({message:"invalid email or password"}) 
    }

    const isPasswordValid= await bcrypt.compare(password,user.password)

    if(!isPasswordValid)
        return res.status(400).json({message:"invalid email or password"})


    const token = jwt.sign(
        {id:user._id,username:user.username},process.env.JWT_SECRET,{expiresIn:"1d"}
    )

    res.cookie("token",token)

    res.status(200).json({message:"user logged in successfully",user})
}



module.exports.logoutUser=async (req,res)=>{
  const token= req.cookies.token

  if(token){
    await tokenBlacklistModel.create({token})
  }

  res.clearCookie("token")
  res.status(200).json({message:"user logged out successfully"})
}


module.exports.getMeUser= async(req,res)=>{
  const user= await userModel.findById(req.user.id)

  res.status(200).json({message:"user details fetch successfully",user})
}