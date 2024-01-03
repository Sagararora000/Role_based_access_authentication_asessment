const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    role:{
        type:String,
        enum:['guest',"admin","employee"],
        // default:"user",
        required: true
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User;