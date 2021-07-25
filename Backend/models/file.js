const mongoose = require ('mongoose');

const FileSchema = new mongoose.Schema ({

    type: {type: String, required: true},
    course: {type: String, required: true},
    year: {type: Number, default: 3, required: true},
    description: {type:String,default:"", required: true},
    branch: {type:String,default:"CS", required: true},
    link: {type:String,default:"", required: true},  
    isApproved:{type:Boolean,default:false,required:true},
    uploader:{type: String, required:true},
});

const File = mongoose.model ('file', FileSchema);

module.exports = File;