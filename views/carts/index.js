/*let path = require('path');
let express = require('express');
let app = express();
let mainRouter = require('./mainRoutes');

app.use('/', mainRouter);

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");*/

function fetchShoppingItems()
{
    var shoppingList = [
        { item: "Apple", value: "R10" },
        { item: "Dick", value: "R20" },
        { item: "ItsWednesdayMyDudes", value: "R30" },
    ];
    
    $('#shoppingList').empty();
    
    $.each(shoppingList, function (i) {
        $('#shoppingList').append("<li>ITEM: " + shoppingList[i].item + "<br><br>VALUE: " + shoppingList[i].value + "</li>");
    });
    
    console.log('done');
}