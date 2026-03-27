const express= require("express")
const authRouter= express.Router()
const {registerUser}= require("../controllers/user.controller")
authRouter.post("register",registerUser)


module.exports=authRouter