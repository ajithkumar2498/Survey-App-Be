import mongoose from 'mongoose'

const surveySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    questions: [{
    text: String,
    type: { type: String, enum: ['text', 'choice'], default: 'text' },
    options: [String], // Array of strings for choices
  }],
    
})

const surveyModel = mongoose.model('Survey', surveySchema)

export default surveyModel