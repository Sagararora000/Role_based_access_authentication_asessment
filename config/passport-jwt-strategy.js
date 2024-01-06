const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// const users = require('./routes/auth').users;
const user = require('../models/user');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'pOOgfgzOGlRrfsWd2v9kC7eMxOVNwLWvrBptyUkziMAI5TowwCdiaqlzZ2xenTxcU0ZpZoT02nebYURAmxnbFDH8itPPNaW3f0oHLRNJ+Sw8VcX1ikhp9p9vY9qkaHvOirx4dzUugLDLB6oflqsBCs8T8VkkXOIIOu8Km3t9claMPzn'
};

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });

}));
module.exports = passport;
