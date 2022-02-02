const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
      
    },
    
    added_data: {
        type: String,
        required: true,
        default: new Date(Date.now())
    }
})

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;