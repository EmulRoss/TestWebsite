let path = require('path');
let express = require('express');
let app = express();
let mainRouter = express.Router();
let fileRouter = express.Router();

fileRouter.get('/login_index',function(req, res) {
    res.sendFile(path.join(__dirname,'views','login','index.js'));
});

fileRouter.get('/carts_index',function(req, res) {
    res.sendFile(path.join(__dirname,'views','carts','index.js'));
});

fileRouter.get('/carts_styles',function(req, res) {
    res.sendFile(path.join(__dirname,'views','carts','styles.css'));
});

fileRouter.get('/items_index',function(req, res) {
    res.sendFile(path.join(__dirname,'views','items','index.js'));
});

fileRouter.get('/items_styles',function(req, res) {
    res.sendFile(path.join(__dirname,'views','items','styles.css'));
});

fileRouter.get('/jquery-latest.min',function(req, res) {
    res.sendFile(path.join(__dirname,'views','jquery-latest.min.js'));
});

mainRouter.get('/',function(req, res){
    res.sendFile(path.join(__dirname,'views','login','view.html'));
});
mainRouter.get('/carts',function(req, res){
    res.sendFile(path.join(__dirname,'views','carts','view.html'));
});
mainRouter.get('/items',function(req, res){
    res.sendFile(path.join(__dirname,'views','items','view.html'));
});


app.use('/',mainRouter);
app.use(fileRouter);

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");