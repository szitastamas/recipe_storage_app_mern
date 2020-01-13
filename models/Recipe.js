const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'main'
    },
    privacy: {
        type: String,
        default: 'public'
    },
    date: {
        type: Date,
        default: Date.now
    },
    pic: {
        type: String,
        default: './img/default.jpg'
    }
})

module.exports = mongoose.model('recipe', RecipeSchema)