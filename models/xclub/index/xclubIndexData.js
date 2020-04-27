const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/tech_board_website");

//xclub index page - data model

const xclubIndexDataSchema = new mongoose.Schema({

//header data
logo : String,

//about data   
aboutTitle : String,
aboutImage : String,
aboutDesc : String,

});


//Creating and exporting the xclub index data model instance
module.exports = new mongoose.model('xclubIndexData' , xclubIndexDataSchema);