import userModel from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const hashPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    return hash
}

let hashCompare = async(password,hash)=>{
  return await bcrypt.compare(password,hash)
}

let createToken = async (payload)=>{
  let token = await jwt.sign(payload, process.env.JWT_SECRET,{
      expiresIn:process.env.JWT_EXPIRE
  })
  return token
}

const registerUser = async(req, res)=>{
     const {name, email, password} = req.body
     const hashedPassword = await hashPassword(password)
    try {

        const newUser = new userModel({name, email, password:hashedPassword})
           await newUser.save()

           res.status(201).json({
            message:'user Created Successfully',
            newUser
           })
    } catch (error) {
        res.status(500).json({
            message:"internal Server Error",
            error:error.message
        })
    }
}


const login = async(req, res)=>{
    const {email, password} = req.body

    try {
        const user = await userModel.findOne({email})

        // CRITICAL FIX: Check if user exists BEFORE comparing passwords.
        // If user is null, accessing 'user.password' inside hashCompare will crash the server.
        if (!user) {
            return res.status(404).json({
                message: `Invalid Credentials`
            })
        }

        const checkPassword = await hashCompare(password, user.password)

        if (!checkPassword) {
            return res.status(404).json({
                message: `Invalid Credentials`
            })
        }

        const token = await createToken({
            user:user._id,
            email:user.email
        })

        res.status(200).json({
            message:'user login succesful',
            userName:user.name,
            email:user.email,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            message:"internal Server Error",
            error:error.message
        })
    }
}



export  {
    registerUser,
    login
}