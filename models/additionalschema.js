const mongoose = require('mongoose')

const additionalshcema = mongoose.Schema(
    {
        fever:{
            type: String,
            required: false
        },
        Sore_throat:{
            type: String,
            required: false
        },
        dry_cough:{
            type: String,
            required: false
        },
        runny_nose:{
            type: String,
            required: false
        },
        shortness_of_breath:{
            type: String,
            required: false
        },
        body_ache:{
            type: String,
            required: false
        },
        travelled_overseas_last14days:{
            type: String,
            required: false
        },
        contact_with_person_with_covid:{
            type: String,
            required: false
        },
        recovered_from_covid:{
            type: String,
            required: false
        },
        covid_test:{
            type: String,
            required: false
        },
        visitor_id:{
            type: mongoose.Schema.Types.ObjectId, ref:'Visitor',
        }
    },
    { versionKey: false }
)

const Additional = mongoose.model('Additional', additionalshcema);
module.exports = Additional;