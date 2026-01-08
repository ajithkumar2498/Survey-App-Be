import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
  },
  answers: Object, // { "questionId": "answer value" }
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const responseModel = mongoose.model("Response", responseSchema);

export default responseModel;
