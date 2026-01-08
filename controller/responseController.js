import responseModel from "../models/response.js"
 
const submitResponse = async (req, res) => {
    const { surveyId, answers } = req.body;

    // Basic Validation
    if (!surveyId || !answers) {
        return res.status(400).json({ message: "Missing surveyId or answers" });
    }

    try {
        // Use the Response model to create the entry
        const newResponse = new responseModel({ surveyId, answers });
        await newResponse.save();
        
        //Safety check for Socket.io (Prevent crash if io is undefined)
        const io = req.app.get('socketio');
        if (io) {
            io.emit(`new-response-${surveyId}`, newResponse);
        } else {
            console.warn("Socket.io not initialized, skipping real-time emit.");
        }

        res.status(201).json({
            message: 'Thank you for submitting the survey'
        });

    } catch (error) {
        console.error("Submit Error:", error); // Log exact error to console
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        });
    }
}


const getSurveyResults = async (req, res) => {
    try {
        // Get the Survey ID from the URL
        const { id } = req.params;

        const surveyResults = await responseModel.find({ surveyId: id });

        res.status(200).json({
            message: 'your survey data is here',
            surveyResults
        });

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        });
    }
}

export {
submitResponse,
getSurveyResults
}