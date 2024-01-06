const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
userSchema.methods.matchPassword = async function(password){
    try{
        return await bcrypt.compare(password, this.password);
    }catch(error){
        throw new Error(error);
    }
}
const User = mongoose.model('User', userSchema);

module.exports = User;