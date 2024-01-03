const { Module } = require('module');
const User = require('../models/user');

const { resolve } = require('path');


module.exports.signUp = function(req,res){
    return res.render("sign_up");
}

module.exports.create = function(req,res){
    console.log(req.body);
    if(req.body.password != req.body.confirm_password){
        return res.redirect("/");
    }
    if(req.body.role == "admin"){
        User.findOne({role:req.body.role}).then((user)=>{
            // console.log(user);
            if(!user){
                User.create(req.body).then(()=>{
                    return res.redirect("/");
                }).catch((err)=>{
                    console.log("error in creating a user:", err);
                    return
                })
            }
            else{
                console.log("admin is already there");
                return res.redirect('/users/signup');
            }
        }).catch((err)=>{
            console.log("Adminn is already there");
        })
    }
    else{
        User.findOne({email: req.body.email}).then(user=>{
            // console.log(user);
            if(!user){
                User.create(req.body).then(()=>{
                    return res.redirect("/");
                }).catch((err)=>{
                    console.log("error in creating a user:", err);
                    return
                })
            }
            else{
                return res.redirect("back");
            }
        }).catch(err=>console.log("User already exists",err));
    }
    
    
}
module.exports.createSession = function(req,res){
    // console.log(req.body.role);
    User.findOne({role:req.body.role}).then((user)=>{
        // console.log(user);
        if(!user || user.email != req.body.email){
            return res.redirect('/');
        }
        
        return res.redirect('/content');

    })
    
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