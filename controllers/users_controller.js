const { Module } = require('module');
const User = require('../models/user');

const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { resolve } = require('path');


module.exports.signUp = function(req,res){
    return res.render("sign_up");
}

module.exports.create = function(req,res){
    
    
    if(req.body.password != req.body.confirm_password){
        return res.redirect("/");
    }
    bcrypt.hash(req.body.password,10,(err,hashedPassword)=>{
        if(err){
            console.log("Error in hashing password",err);
            return res.redirect("/");
        }
        const userData ={
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role
        }
        if(req.body.role == "Admin"){
            User.findOne({role:req.body.role}).then((user)=>{
                // console.log(user);
                if(!user){
                    User.create(userData).then(()=>{
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
                    User.create(userData).then(()=>{
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
    })
    
    
    
    
}
module.exports.createSession = async function(req,res){
    // console.log(req.body.email);
    // console.log(req.body.role)
    try{
        const {email, password, role} = req.body;
        
        const user = await User.findOne({email: email});
        console.log(user);
        if(!user || user.email != email || role != user.role){
            return res.redirect('/')
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(password);
        console.log(user.password);
        if(!passwordMatch){
            return res.redirect('/');
        }
        return res.redirect('/content');

        
    }catch(e){
        console.log(e.message);
    }
    
    
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