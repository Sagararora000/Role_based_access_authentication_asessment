const { Module } = require('module');
const User = require('../models/user');


module.exports.signUp = function(req,res){
    return res.render("sign_up");
}
module.exports.create = function(req,res){
    
    if(req.body.password != req.body.confirm_password){
        return res.redirect("/");
    }
    User.findOne({email: req.body.email}).then(user=>{
        if(!user){
            User.create(req.body).then(()=>{
                return res.redirect("/");
            }).catch((err)=>{
                console.log("error in creating a user");
                return
            })
        }else{
            return res.redirect("back");
        }
    }).catch(err=>console.log("User already exists"));
}
module.exports.createSession = function(req,res){
    return res.redirect('/content');
}
module.exports.destroySession = function(req,res){
    req.logout((err)=>{
        if(err){
            console.log("Error");
        }
        else{
            res.redirect('/');
        }
    });
}