import surveyModel from "../models/survey.js"

const createSurvey = async (req, res)=>{
    try {
       const survey = new surveyModel ({
        ...req.body,
        creator:req.user._id
       })

       await survey.save()

       res.status(201).json({
        message:'Survey Submitted Successfully',
        survey
       })

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

const getSurveyById = async (req, res)=>{
    try {
        const survey = await surveyModel.findById(req.params.id)
        if(!survey){
            res.status(404).json({
                message:"survey not exists"
            })
        }

        res.status(200).json({
            message:'survey data',
            survey
        })

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

const getUserSurvey = async(req,res)=>{
    try {
        const survey = await surveyModel.find({creator:req.user._id})
         res.status(200).json(
            survey
         )
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

export {
createSurvey,
getSurveyById,
getUserSurvey
}