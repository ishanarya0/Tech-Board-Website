const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/tech_board_website");

//xclub index page - coordinator model

const coordinatorSchema = new mongoose.Schema({

//member card data
    photo : String,
    name : String,
    about : String,
    facebook : String,
    instagram : String,
    linkedin : String,
    email : String

});


//Creating and exporting the coordinator model instance
module.exports = new mongoose.model('coordinator' , coordinatorSchema);