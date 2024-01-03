
const passport = require("passport");

const LocalStrategy = require("passport-local");

const User = require("../models/user");

passport.use(new LocalStrategy({
    usernameField: "email",
},function(email,password,done){
    User.findOne({email:email}).then((user)=>{
        
        if(!user || user.password != password ){
            console.log('Invalid Username/Password');
            return done(null,false);
        }
        // if(user.role != role){
        //     console.log("invalid credentials");
        //     return done(null,false);
        // }
        return done(null,user);
    }).catch((err)=>{
        console.log("Error in finding user courtesy to passport");
        return done(err);
    })
}));

//serializing the user to decide whcih key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
})

//deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id).then((user)=>{
        return done(null,user);
    }).catch((err)=>{
        if(err){
            console.log("Error in finding user --> passport");
            return done(err);
        }
    });
});

//Check if the user is authenticated

passport.checkAuthentication= function(req,res,next){

    if(req,isAuthenticated()){
        return next();
    }
    return res.redirect('/');

}
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}
module.exports = passport