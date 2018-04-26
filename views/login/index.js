//login function
function AttemptLogin()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //username and password validation
    if ( (username == "asd") && (password = "asd")) 
    {
        console.log(username);
        console.log(password);
        //navigate to the carts page
        window.location.href = '/carts';
    }
    else
    {
        //if the username and password are incorrect log an Error
        console.log("Error");
    }  
}