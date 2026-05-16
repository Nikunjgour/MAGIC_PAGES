// import { Error } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import User from "../model/usermodel.js";

const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    res.status(409);
    throw new Error("Please fill all tha details!");
  }

  const emailExist = await User.findOne({ email: email });
  const phoneExist = await User.findOne({ phone: phone });

  if (emailExist || phoneExist) {
    res.status(409);
    throw new Error("User Already Exists!");
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  if (!user) {
    res.status(404);
    throw new Error("User not found!");
  }

  res.status(201).json({
    _id: user._id,
    name: user.name,
    eamil: user.email,
    phone: user.phone,
    credits: user.crtedits,
    isAdmin: user.isAdmin,
    createdAt: user.createdAt,
    token: generateToken(user._id)
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(409)
    throw new Error("Please fill all tha details!");
  }

  const user = await User.findOne({ email })


  if (user && await bcrypt.compare(password, user.password)) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      eamil: user.email,
      phone: user.phone,
      credits: user.crtedits,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      token: generateToken(user._id)
    })
  } else {


    // res.status(401)
    throw new Error("Invalid Credentails")
  }
}

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}




const authController = {
  registerUser,
  loginUser,
};

export default authController;
