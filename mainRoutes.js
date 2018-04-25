let path = require('path');
let express = require('express');
let mainRouter = express.Router();

mainRouter.get('/view',function(req, res){
    res.sendFile(path.join(__dirname,'views','login','view.html'));
});
module.exports = mainRouter;