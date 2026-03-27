require("dotenv").config()
const app = require("./src/app")
const connectDB=require("./src/config/database")
connectDB()
const port=process.env.PORT

app.listen(port,()=>console.log(`the server is running on the port http://localhost:${port}`))