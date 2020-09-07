const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const uploader = require('./Uploader');
const slugify = require('../plugins/slugify');

// hay que crear un Schema
// se generan los atributos

let placeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        unique: true
    },
    description: String,
    acceptsCreditCard: {
        type: Boolean,
        default: false
    },
    coverImage: String,
    avatarImage: String,
    openHour: Number,
    closeHour: Number,
    address: String
});

placeSchema.methods.updateImage = function(path, imageType){
    return uploader(path)
        .then(secure_url => this.saveImageUrl(secure_url, imageType));
}

placeSchema.methods.saveImageUrl = function(secureUrl, imageType){
    this[imageType+'Image'] = secureUrl;
    return this.save();
}

placeSchema.pre('save', function(next){
    this.slug = slugify(this.title);
    next();
})

placeSchema.plugin(mongoosePaginate);

let Place = mongoose.model('Place', placeSchema);

module.exports = Place;