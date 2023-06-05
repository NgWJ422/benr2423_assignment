const mongoose = require('mongoose')

const otherschema = mongoose.Schema(
    {
        visitor_category:{
            type: String,
            required: true
        },
        telephone_number:{
            type: String,
            required: true
        },
        vehicle_type:{
            type: String,
            required: true
        },
        vehicle_number:{
            type: String,
            required: true
        },
        pre_register_pass_no:{
            type: String,
            required: true
        },
        visitor:{
            type: mongoose.Schema.Types.ObjectId, ref:'Visitor'
        }
    },
    { versionKey: false }
)

const Other = mongoose.model('Other', otherschema);
module.exports = Other;