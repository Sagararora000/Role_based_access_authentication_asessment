const express = require('express');
const port = 8010;
const app = express();


const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//prevents logging in again and again after server is down
const MongoStore = require('connect-mongo');
app.use(express.urlencoded());

//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');
// app.get('/',function(req,res){
//     return res.send("<h1>hello</h1>");
// })
app.use(session({
    name:'codeial',
     // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({mongoUrl: 'mongodb://localhost/multirole_log_in'})
    
}));
app.use(express.static('./assets'));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


app.use('/',require('./routes'));
app.listen(port,function(){
    console.log("Server running at port:",port);
})