// User Schema
const mongoose = require('mongoose')

const loginSchema = new mongoose.schema({

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
const login = mongoose.model("login", loginSchema);

module.exports = login;


//Postman object
/*
{
    "firstName": "Shital",
    "lastName": "Rathod",
    "email" : "shital123",
    "password" : "ABC123"

}
*/