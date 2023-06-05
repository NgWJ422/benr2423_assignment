const mongoose = require('mongoose')

const visitationschema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        visit_date:{
            type: String,
            required: true
        },
        checkin_time:{
            type: String,
            required: true
        },
        visit_expiry_time:{
            type: String,
            required: true
        },
        checkout_time:{
            type: String,
            required: false
        },
        visitor:{
            type: mongoose.Schema.Types.ObjectId,ref:'Visitor'
        },
        detail:{
            type: mongoose.Schema.Types.ObjectId, ref:'Detail'
        },
    },
    { versionKey: false }
)
const Visitation = mongoose.model('Visitation', visitationschema);
module.exports = Visitation;