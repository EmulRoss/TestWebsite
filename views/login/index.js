/*let path = require('path');
let express = require('express');
let app = express();
let mainRouter = require('./mainRoutes');

app.use('/', mainRouter);

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");*/

function AttemptLogin()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ( (username == "asd") && (password = "asd")) 
    {
        console.log(username);
        console.log(password);
        window.location.href = '../carts/view.html';
    }
    else
    {
        console.log("Error");
    }  
}

