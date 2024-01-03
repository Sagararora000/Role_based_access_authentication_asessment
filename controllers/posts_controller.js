const Post = require('../models/post');
module.exports.createPost = function(req,res){
    Post.create({content:req.body.content, user: req.user._id}).then(()=>{
        return res.redirect('/content');
    })
}
module.exports.destroyPost = function(req,res){
    Post.findByIdAndDelete(req.params.id).then((post)=>{
        if(post.user.valueOf() == req.user.id){
            return res.redirect('/content');
        }else{
            return res.redirect('back');
        }
        
    })
}