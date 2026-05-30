const express= require("express")
const authRouter=require("./routes/user.routes")
const app = express()
const cookieParser= require("cookie-parser")
const cors =require("cors")
const interviewRouter= require("../src/routes/interview.routes")
// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))
// apis
app.use("/api/auth",authRouter),
app.use("/api/interview",interviewRouter),



module.exports=app