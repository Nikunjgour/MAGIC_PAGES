import { Error } from "mongoose"
import bcrypt from "bcrypt"
import User from "../model/usermodel.js"

const registerUser = async (req,res) => {

   const {name , email , phone , password } = req.body 
   if (!name || !email || !phone || !password ){
    res.status(409)
    throw new Error("Please fill all tha details!")
   }

   const emailExist = await User.findOne({email:email})
   const phoneExist = await User.findOne({phone:phone})

   if (emailExist || phoneExist){
    res.status(409) 
    throw new Error("User Already Exists!")
   }


   // Hash Password 
   const salt = await bcrypt.genSalt(10) 
   const hashedPassword =  await  bcrypt.hash(password , salt)




   const user = await User.create({name , email , phone , password:hashedPassword})

   if (!user){
    res.status(404)
    throw new Error("User not found!")
   }

   res.status(201).json(user)


  
}

const loginUser = async (req,res) => {
    res.send("User Logined")
}



const authController = {
    registerUser,
     loginUser
}

export default authController;