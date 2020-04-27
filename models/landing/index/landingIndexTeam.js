const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/tech_board_website");

//landing page - team member model

const memberSchema = new mongoose.Schema({

//member card data
    photo : String,
    name : String,
    facebook : String,
    twitter : String,
    instagram : String

});


//Creating and exporting the member model instance
module.exports = new mongoose.model('member' , memberSchema);