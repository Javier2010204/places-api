const cloudinary = require('cloudinary');

const secrets = require('../config/secrets');
const { response } = require('express');

cloudinary.config(secrets.cloudinary);

module.exports = function(imagePath){

    return new Promise((resolve, reject) => {

        cloudinary.uploader.upload(imagePath, function(result){
            console.log(result);

            if (result.secure_url) return resolve(result.secure_url);
            reject(new Error('error en cloudinary'));
        })
    })
}