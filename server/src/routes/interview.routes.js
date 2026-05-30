const express=require("express")

const interviewRouter= express.Router()
const {authUser}= require("../middlewares/auth.middleware")
const upload= require("../middlewares/file.middleware")
const {genInterviewReport}=require("../controllers/interview.controller")

interviewRouter.post("/",authUser,upload.single("resume"),genInterviewReport)






module.exports= interviewRouter