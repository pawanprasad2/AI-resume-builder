const express= require("express")
const authRouter= express.Router()
const {registerUser,loginUser,logoutUser}= require("../controllers/user.controller")
authRouter.post("register",registerUser)

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.get("/logout",logoutUser)
module.exports=authRouter