import express, { Router } from 'express'
import { login, registerUser } from '../controller/authController.js'


const router = express.Router()

router.post('/signup', registerUser )
router.post('/login', login)

export default router