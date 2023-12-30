const express = require('express');
const port = 8010;
const app = express();
//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.get('/',function(req,res){
    return res.send("<h1>hello</h1>");
})
app.listen(port,function(){
    console.log("Server running at port:",port);
})