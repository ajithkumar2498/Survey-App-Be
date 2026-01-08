import express, { Router } from 'express'
import { authToken } from '../middleware/authMiddleware.js'
import { createSurvey, getSurveyById, getUserSurvey } from '../controller/surveyController.js'



const router = express.Router()

//protected routes
router.post('/addsurvey', authToken, createSurvey )
router.get('/my-survey', authToken, getUserSurvey)

//public routes for survey
router.get('/:id',  getSurveyById)


export default router