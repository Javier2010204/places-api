const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const uploader = require('./Uploader');

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
    avatarImage: String,
    openHour: Number,
    closeHour: Number
});

placeSchema.methods.updateAvatar = function(path){
    return uploader(path)
        .then(secure_url => this.saveAvatarUrl(secure_url));
}

placeSchema.methods.saveAvatarUrl = function(secureUrl){
    this.avatarImage = secureUrl;
    return this.save();
}

placeSchema.plugin(mongoosePaginate);

let Place = mongoose.model('Place', placeSchema);

module.exports = Place;