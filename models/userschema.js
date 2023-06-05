const mongoose = require('mongoose')

const userschema = mongoose.Schema(
    {
        username:{
            type: String,
            required:true
        },
        password:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        role:{
            type: String,
            required: true
        },
        visitor_id:{
            type: mongoose.Schema.Types.ObjectId,ref:'Visitor'
        }
    },
    { versionKey: false }
)
const User = mongoose.model('User', userschema);
module.exports = User;
