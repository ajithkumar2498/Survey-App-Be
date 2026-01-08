import express from 'express'
import userRoutes from './userRoutes.js'
import surveyRoutes from './surveyRoutes.js'
import responseRoutes from './responseRoutes.js'


const router = express.Router()

router.use('/user', userRoutes)
router.use('/survey', surveyRoutes)
router.use('/response', responseRoutes)


export default router