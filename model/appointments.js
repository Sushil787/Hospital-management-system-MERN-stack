const mongoose = require('mongoose');


const appintments_schema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    status: {
        type: String,
        default: "unchecked",
        required: true,
    },
    invoice: {
        type: Number,
        default: 0,
    },
    disease: {
        type: String,
        default: "Healthy",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },

});


const appointments = mongoose.model("appointments", appintments_schema);
module.exports = appointments;