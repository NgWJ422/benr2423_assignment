const mongoose = require('mongoose')


const blacklistschema = mongoose.Schema(
    {
        blacklist_status:{
            type: String,
            required: true
        },
        reason:{
            type: String,
            required: true
        },
        remark:{
            type: String,
            required: true
        },
        blacklist:{
            type: mongoose.Schema.Types.ObjectId, ref:'Blacklist'
        },
    },
    { versionKey: false }
)
const Blacklist = mongoose.model('Blacklist', blacklistschema);
module.exports = Blacklist;