const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String
    },
    courseDescription:{
        type:String
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    whatYouWillLearn:{
        type:String
    },
    category: {
		type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: "Category",
	},
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section"
        }
    ],
    ratingAndReviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "RatingAndReview",
		},
	],
    price:{
        type:Number
    },
    thumbnail:{
        type:String
    },
    tag: {
		type: [String],
		required: true,
	},
    studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    status: {
		type: String,
		enum: ["Draft", "Published"],
	},
    
},{ timestamps: true }
)

module.exports = mongoose.model("Course",courseSchema)