import mongoose from "mongoose"
import dns from "dns" 

dns.setServers(["8.8.8.8", "8.8.4.4"]) 


const connectDB = async () => { 
try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
     console.log(`DB CONNECTION SUCCESS  : ${conn.connection.name}`.bgGreen.black)
} catch (error) {
    console.log(`ERROR IN DB CONNECTION : ${error.message }`.bgRed)
}
}

export default connectDB 