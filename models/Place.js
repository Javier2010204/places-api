const mongoose = require('mongoose');

// hay que crear un Schema
// se generan los atributos

let placeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    acceptsCreditCard: {
        type: Boolean,
        default: false
    },
    coverImage: String,
    avatar: String,
    openHour: Number,
    closeHour: Number
});

let Place = mongoose.model('Place', placeSchema);

module.exports = Place;