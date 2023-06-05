const mongoose = require('mongoose')



const docschema = mongoose.Schema(
    {
        doc_expiry_date:{
            type: String,
            required: false
        },
        passport:{
            type: String,
            required: false
        },
        Mykad:{
            type: String,
            required: false
        },
        job_id:{
            type: String,
            required: false
        },
        visitor_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Visitor'
        },
    },
    { versionKey: false }
)
const Document = mongoose.model('Document', docschema);
module.exports = Document;