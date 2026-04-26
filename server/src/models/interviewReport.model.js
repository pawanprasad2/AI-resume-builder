const mongoose= require("mongoose")




const technicalQuestionSchema = new mongoose.Schema({
    question:{
         type:String,
         required:[true,"question is required"]
    },
    intention:{
        type:String,
        required:[true,"intention is required"]
    },
    answer:{
        type:String,
        required:[true,"answer is required"]

    }
},{
    _id:false
})


const behaviourQuestionSchema = new mongoose.Schema({
    question:{
         type:String,
         required:[true,"question is required"]
    },
    intention:{
        type:String,
        required:[true,"intention is required"]
    },
    answer:{
        type:String,
        required:[true,"answer is required"]

    }
},{
    _id:false
})

const skillGapsSchema= new mongoose.Schema({
    skill:{
        type:String,
        required:[true,"skill is required"]
    },
    severity:{
        type:String,
        enum:["low","medium","high"],
        required:[true,"severity is required"]
    }
},{
    _id:false
})


const preparationPlanSchema= new mongoose.Schema({
    day:{

        type:number,
        required:[true,"day is required"]
    },
    focus:{
        type:String,
        required:[true,"focus is required"]
    },
    
    tasks:[{
        type:String,
        required:[true,"day is required"]
    },]
    


})
const interviewReportSchema= new mongoose.Schema({
 jobDescription:{
    type:String,
    required:[true,"job description is required"]
 },
 resume:{
    type:String
 },
 selfDescription:{
    type:String
 },
 matchScore:{
    type:Number,
    min:0,
    max:100
 },
 technicalQuestions:[technicalQuestionSchema],
 behaviourQuestion:[behaviourQuestionSchema],
 skillGaps:[skillGapsSchema],
 preparationPlan:[preparationPlanSchema]
 

},{timestamps:true})


const interviewReportModel= mongoose.model("InterviewReport",interviewReportSchema)


module.exports=interviewReportModel