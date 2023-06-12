const mongoose = require('mongoose')

const visitationschema = mongoose.Schema(
    {
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
        overtime_status:{
            type:String,
            required: true
        },
        visitor_id:{
            type: mongoose.Schema.Types.ObjectId,ref:'Visitor'
        },
        detail_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Detail',
            required: true
        }
    },
    { versionKey: false }
)
const Visitation = mongoose.model('Visitation', visitationschema);
module.exports = Visitation;