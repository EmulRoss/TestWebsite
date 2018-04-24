let path = require('path');
let express = require('express');
let mainRouter = express.Router();
mainRouter.get('/',function(req, res) {
    res.send('Hello World');
});

mainRouter.get('/',function(req, res) {
    res.send('Hello World, I\'m Node.js');
    });

mainRouter.get('/views',function(req, res){
    res.sendFile(path.join(__dirname,'views','login/view.html'));
});
module.exports = mainRouter;
