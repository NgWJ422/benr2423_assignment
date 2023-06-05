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
        doc_type:{
            type: mongoose.Schema.Types.ObjectId, ref:'Document'
        },
        address:{
            type: mongoose.Schema.Types.ObjectId, ref:'Address'
        },
        other:{
            type: mongoose.Schema.Types.ObjectId, ref:'Other'
        },
        detail:[
            {type: mongoose.Schema.Types.ObjectId, ref:'Detail'}
        ],
        additional:{
            type: mongoose.Schema.Types.ObjectId, ref:'Additional'
        },
        blacklist:{
            type: mongoose.Schema.Types.ObjectId, ref:'Blacklist'
        },
        visitation:{
            type: mongoose.Schema.Types.ObjectId, ref:'Visitation'
        },
    },
    { versionKey: false }
)

const Visitor = mongoose.model('Visitor', visitorschema);
module.exports = Visitor;