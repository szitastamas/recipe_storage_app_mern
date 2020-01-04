const mongoose = require('mongoose');

// Creating a User Schema for the Database:
// Keys: name, email, password, date
// This is equivalent to the MSSQL Table Columns
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
})

// Exporting the Schema for further usage in the users.js file
// It will be used when registering a user and saving it to the DB
module.exports = mongoose.model('user', UserSchema)