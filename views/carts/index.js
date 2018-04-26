//when the document is ready then start the function using jQuery
$(document).ready(function() {
    //create a list of items
    var shoppingList = [
        { item: "Apple", value: "R10" },
        { item: "Mango", value: "R20" },
        { item: "Banana", value: "R30" },
    ];
    //clear the shopping list in the html
    $('#shoppingList').empty();
    //add the new list to the shopping list in the html
    $.each(shoppingList, function (i) {
        $('#shoppingList').append("<li>ITEM: " + shoppingList[i].item + "<br><br>VALUE: " + shoppingList[i].value + "</li>");
    });
    //log when action complete
    console.log('done');
});