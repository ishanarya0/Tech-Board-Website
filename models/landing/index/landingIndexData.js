const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/tech_board_website");

//landing page data model

const landingDataSchema = new mongoose.Schema({

//header data
    logo : String,
    headerTitle : String,
    quoteText : String,

 //about data   
    aboutTitle : String,
    aboutDesc : String,

//contact data
    contactTitle : String,

//map data
    address : String,
    mobileNumber : String

});

//Creating and exporting the landingData model instance
module.exports = new mongoose.model('landingData' , landingDataSchema);