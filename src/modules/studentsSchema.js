const mongoose = require("mongoose")
const validator = require("validator")


//schema defination 
const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    email : {
        type: String,
        required : true,
        unique:[true, "Email ID already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone : {
        type : Number,
        minlength: 10,
        maxlength : 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        
    }
})


//defining the module to be export
const Student = new mongoose.model('Students', studentSchema);

//exporting the module
module.exports = Student;