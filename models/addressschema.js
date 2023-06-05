const mongoose = require('mongoose')


const addressschema = mongoose.Schema(
    {
        address:{
            type: String,
            required: true
        },
        town:{
            type: String,
            required: true
        },
        postcode:{
            type: Number,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        country:{
            type: String,
            required: true
        },
        visitor_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Visitor'
        },
    },
    { versionKey: false }
)
const Address = mongoose.model('Address', addressschema);
module.exports = Address;