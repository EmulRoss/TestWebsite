function AttemptLogin()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ( (username == "asd") && (password = "asd")) 
    {
        console.log(username);
        console.log(password);
        window.location.href = '/carts';
    }
    else
    {
        console.log("Error");
    }  
}