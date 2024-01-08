# Role Based Access Control
This is a Role Based Access Control application using Nodejs, Express, Passport Js, etc. You can use this application as the starting point for whatever project you are going to build which needs authentication and authorization.

For authentication we have only Email, Password and role options but other authentication options can also be added using OAuth/OAuth2.0

The application is based on the MVC pattern i.e. Model View Controller.
Mongoose is used as an ORM for MongoDB for storing Users in Database.
Passport JS is used for local(email, password) authentication.
The application is production ready

**In this project admin has access to:**
1) post
2) delete all the posts
3) see all the registered users

**employee has the access to:**
1) post
2) delete its own post

**guest has the access to**
1) only view the post

## Link for the website ##
https://rolebasedaccessloginassessmentbysagararora-4dylo1nm.b4a.run/users/signup

***admin*** credentials:-

**username**: __sag@gmail.com__

**password:** __1__

**I have created the admin( You can also create your own but there can be only one admin in this project you can ask me to delete the credentials of admin if you want.)**
## To start setting up the project
Step 1: Clone the repo

`git clone https://github.com/trulymittal/role-based-access-control`

Step 2: cd into the cloned repo and run:

`npm install`

Step 2.1 required dependencies

`bcryptjs
body-parser
connect-mongo
dotenv
ejs
express
express-session
mongo-store
mongodb
mongoose
nodemon
passport
passport-local`

Step 3: put your credentials in 

    index.js file:-
    
    `store: MongoStore.create({(example: mongodb://localhost/multirole_log_in)})`
    
    mongoose.js file:-
    
    `mongoose.connect('(example: mongodb://localhost/multirole_log_in)');`

    

Step 4: Install MongoDB

See https://docs.mongodb.com/manual/installation/ for more infos

Step 5 Start the app by

`npm start`




