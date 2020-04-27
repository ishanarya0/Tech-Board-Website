const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/tech_board_website");

//xclub gallery page - photo card model

const xclubGalleryCardSchema = new mongoose.Schema({

//photo card data
    image : String,
    title : String
});


//Creating and exporting the photo card model instance
module.exports = new mongoose.model('photoCard' , xclubGalleryCardSchema);