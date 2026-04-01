const express= require("express")
const authRouter= express.Router()
const {authUser}=require("../middlewares/auth.middleware")
const {registerUser,loginUser,logoutUser,getMeUser}= require("../controllers/user.controller")

authRouter.post("register",registerUser)
authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.get("/logout",logoutUser)
authRouter.get("/get-me",authUser,getMeUser)



module.exports=authRouter