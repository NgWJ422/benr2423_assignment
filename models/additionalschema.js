const mongoose = require('mongoose')

const additionalshcema = mongoose.Schema(
    {
        fever:{
            type: String,
            required: true
        },
        Sore_throat:{
            type: String,
            required: true
        },
        dry_cough:{
            type: String,
            required: true
        },
        runny_nose:{
            type: String,
            required: true
        },
        shortness_of_breath:{
            type: String,
            required: true
        },
        body_ache:{
            type: String,
            required: true
        },
        travelled_overseas_last14days:{
            type: String,
            required: true
        },
        contact_with_person_with_covid:{
            type: String,
            required: true
        },
        recovered_from_covid:{
            type: String,
            required: true
        },
        covid_test:{
            type: String,
            required: true
        },
        visitor_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Visitor',
        }
    },
    { versionKey: false }
)

const Additional = mongoose.model('Additional', additionalshcema);
module.exports = Additional;