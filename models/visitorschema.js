const mongoose = require('mongoose')

const visitorschema = mongoose.Schema(
    {
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
        date_of_birth:{
            type: String,
            required: true
        },
        ethnicity:{
            type: String,
            required: true
        },
        citizenship:{
            type: String,
            required: true
        },
        license_number:{
            type: String,
            required: true
        },
        visit_status:{
            type: String,
            required: true
        },
        user_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'User'
        },
        doc_type_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Document'
        },
        address_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Address'
        },
        other_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Other'
        },
        detail_id:[
            {type: mongoose.Schema.Types.ObjectId, ref:'Detail'}
        ],
        additional_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Additional'
        },
        blacklist_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Blacklist'
        },
        visitation_id:[{
            type: mongoose.Schema.Types.ObjectId, ref:'Visitation'
        }]
    },
    { versionKey: false }
)

const Visitor = mongoose.model('Visitor', visitorschema);
module.exports = Visitor;