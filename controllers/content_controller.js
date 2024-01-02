const Post = require('../models/post');
module.exports.displayContent = function(req,res){
    Post.find({}).then((posts)=>{
        return res.render("content",{
            posts: posts
        });
    })
    
}