const express = require('express');
const placesController = require('../controllers/PlacesController');
const { saveImage } = require('../controllers/PlacesController');

let router = express.Router();

router.route('/')
    .get(placesController.index)
    .post(
        placesController.multerMiddleware(), 
        placesController.create,
        saveImage)


router.route('/:id')
    .put(placesController.find, placesController.update)
    .delete(placesController.find, placesController.destroy)
    .get(placesController.find, placesController.show)

module.exports = router;
