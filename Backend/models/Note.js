const mongoose = require ('mongoose');

const NoteSchema = new mongoose.Schema ({

    optradio: {type: String,default:"", required: true},
    CourseNumber: {type: String, required: true},
    Year: {type: Number, default: 3, required: true},
    Branch: {type: String,default:"Computer Science", required: true},
    file: {type: Buffer,required:true,unique:true},
    isApproved:{type:Boolean,default:false},
});

const Note= mongoose.model('note',NoteSchema);

module.exports=Note;