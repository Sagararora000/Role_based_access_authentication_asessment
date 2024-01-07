const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/multirole_log_in');
mongoose.connect('mongodb+srv://sagar:mongodbsagar@cluster0.lagmezc.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;

db.on('error',console.error.bind(console, "Error connecting to MongoDB"));
db.once('open',function(){
    console.log("Connected to Database: MongoDB");
})
module.exports = db