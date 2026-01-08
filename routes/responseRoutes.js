import express, { Router } from 'express'
import { authToken } from '../middleware/authMiddleware.js'
import { getSurveyResults, submitResponse } from '../controller/responseController.js'




const router = express.Router()

//Public routes
router.post('/submit-response', submitResponse )

//protected routes for get survey result
router.get('/:id', authToken, getSurveyResults)


export default router