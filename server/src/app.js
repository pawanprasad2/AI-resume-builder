const express= require("express")
const authRouter=require("./routes/user.routes")
const app = express()
const cookieParser= require("cookie-parser")

// middleware
app.use(express.json())
app.use(cookieParser())
// apis
app.use("/api/auth",authRouter)


module.exports=app