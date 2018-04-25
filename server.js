/*let path = require('path');
let express = require('express');

let mainRouter = require('./mainRoutes');

app.use('/', mainRouter);

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");

let path = require('path');
let express = require('express');
let mainRouter = express.Router();
let app = express();

app.use('/', mainRouter);
app.listen(process.env.PORT || 3000);

mainRouter.get('view',function(req, res){
    res.sendFile(path.join(__dirname,'views', 'login', 'view.html'));
});
module.exports = mainRouter;

//window.location.href = "./views/login/view.html'";*/

let path = require('path');
let express = require('express');
let app = express();
let mainRouter = express.Router();


mainRouter.get('/',function(req, res){
    res.sendFile(path.join(__dirname,'views','login','view.html'));
});

app.use('/',mainRouter);

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");