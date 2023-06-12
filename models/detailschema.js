const mongoose = require('mongoose')


const detailschema = mongoose.Schema(
    {
        no_of_visitor:{
            type: Number,
            required: true
        },
        purpose_of_visit:{
            type: String,
            required: true
        },
        To_meet_host:{
            type: String,
            required: true
        },
        host_info:{
            type: String,
            required: true
        },
        location_department:{
            type: String,
            required: true
        },
        unit_no:{
            type: String,
            required: true
        },
        location_info:{
            type: String,
            required: true
        },
        permit_no:{
            type: String,
            required: true
        },
        delivery_order:{
            type: String,
            required: false
        },
        remarks:{
            type: String,
            required: true
        },
        visitor_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Visitor'
        },
        visitation_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Visitation'
        },
    },
    { versionKey: false }
)
const Detail = mongoose.model('Detail', detailschema);
module.exports = Detail;