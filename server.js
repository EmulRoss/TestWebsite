/*let path = require('path');
let express = require('express');
let app = express();
let mainRouter = require('./mainRoutes');

app.use('/', mainRouter);

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");*/

let path = require('path');
let express = require('express');
let mainRouter = express.Router();

mainRouter.get('views',function(req, res){
    res.sendFile(path.join(__dirname,'views','login/view.html'));
});
module.exports = mainRouter;