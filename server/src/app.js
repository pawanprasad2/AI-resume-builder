const express= require("express")
const authRouter=require("./routes/user.routes")
const app = express()


// middleware
app.use(express.json())

// apis
app.use("/api/auth",authRouter)


module.exports=app