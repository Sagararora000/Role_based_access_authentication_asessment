const Post = require('../models/post');
const User = require('../models/user');
module.exports.displayContent = function(req,res){
    Post.find({}).populate('user').exec().then((posts)=>{
        User.find({}).then((user)=>{
            return res.render("content",{
                posts: posts,
                users: user
            });
        })
        
    })
    
}