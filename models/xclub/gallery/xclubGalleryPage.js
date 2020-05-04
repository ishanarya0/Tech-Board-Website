const mongoose = require('mongoose');

//xclub gallery page model

const xclubGalleryPageSchema = new mongoose.Schema({

//photo card data
    image : String,
    title : String

});

//Creating and exporting the photo card model instance
module.exports = new mongoose.model('xclubGalleryPage' , xclubGalleryPageSchema);