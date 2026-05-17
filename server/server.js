import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./config/dbconfig.js"

// local imports
import authRoutes from "./routes/authRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import errorHandler from "./middlewares/errorHandler.js"


dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

//DB Connection
connectDB()

// Body-parser
app.use(express.json())
app.use(express.urlencoded())



app.get("/", (req, res) => {
    res.json({
        message: "MAGIC PAGES API 1.0..."
    })
})

// Auth routes 

app.use("/api/auth", authRoutes)


// Admin Routes
app.use("/api/admin", adminRoutes)

// Error Handler
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue)
})

