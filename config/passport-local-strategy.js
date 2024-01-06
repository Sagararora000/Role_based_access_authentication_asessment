
const passport = require("passport");

const LocalStrategy = require("passport-local");

const User = require("../models/user");

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
},async (email,password,done)=>{
    try{
        const user = await User.findOne({email: email});
        if(!user){
            console.log('Invalid Username/Password');
            return done(null,false);
        }
        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return done(null,false);
        }
        return done(null,user);
    }catch(err){
        console.log(err);
        return done(err, false);
    }
    
    
    
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