const express=require("express")

const interviewRouter= express.Router()
const {authUser}= require("../middlewares/auth.middleware")
const {}= require("../controllers/interview.controller")


interviewRouter.post("/",authUser,)
// interviewRouter.get("",)






module.exports= interviewRouter