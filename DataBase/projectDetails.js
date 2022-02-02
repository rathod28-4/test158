const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({

    Project_ID: {
        type: Number,
        required: true,
        unique: true,
    },

    Project_Name: {
        type: String,
        required: true,
    },

    Project_Details: {
        type: String,
        required: true,
        unique: true
    },

    added_data: {
        type: String,
        required: true,
        default: new Date(Date.now())
    }

})

const projectDetails = mongoose.model("project", projectSchema);

module.export = projectDetails;