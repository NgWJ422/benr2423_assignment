const mongoose = require('mongoose')


const blacklistschema = mongoose.Schema(
    {
        blacklist_status:{
            type: String,
            required: true
        },
        reason:{
            type: String,
            required: false
        },
        remark:{
            type: String,
            required: false
        },
        visitor_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Visitor'
        },
    },
    { versionKey: false }
)
const Blacklist = mongoose.model('Blacklist', blacklistschema);
module.exports = Blacklist;