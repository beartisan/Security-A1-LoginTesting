window.onload = function () {
    // alert("Hello Sean");
    var formHandle = document.forms.userAuth__form;

    formHandle.onsubmit = processForm;
    function processForm() {

        //variables for username and password input
        var inputUsername = formHandle.userAuth__username;
        var inputPassword = formHandle.userAuth__password;

        //message output variable
        var messageOut = document.getElementById("output");

        //variables for username and password output
        var usernameOutput = document.getElementById("output__username");
        var passwordOutput = document.getElementById("output__password");


        //fix this code
        //LOGIC STATEMENT
            //empty output div used for successful login message
        var showOutput = checkLogin(inputUsername.value, inputPassword.value);
            if(showOutput == true)
            {
                showOutput = "Welcome back!";
            } 
            //else if input username is an empty string
            else if (showOutput == "No username entered.") 
            {
                // inputUsername.style.background = "red";
                // inputUsername.focus();
                showOutput = "No username entered.";
            }
            //else if input password is an empty string
            //input password is an empty string
            else if (showOutput == "No password entered.") 
            {
                // inputPassword.style.background = "red";
                // inputPassword.focus();
                showOutput = "No password entered.";
            } 
            //else if it was an invalid username or password
            else 
            {
                showOutput = "Invalid username or password.";
            }
            



        //this will show
        messageOut.style.display = "block";
        messageOut.innerHTML = showOutput;
        usernameOutput.innerHTML = inputUsername.value;
        passwordOutput.innerHTML = inputPassword.value;

        return false;

    };//end processForm
};//end onload