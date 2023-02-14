//JavaScript Encryption

/**
 * checkLogin.js Encryption function to encrypt provided string.
 * Converting inputUsername and inputPassword into strings of the hash values
 * 
 * @param {string} inputUsername
 * @param {string} inputPassword
 */

//creating a validateLogin function
    //Passing the parameters from assign1.js
    function checkLogin(inputUsername, inputPassword){
        "use strict";

        //assigning variables with my username and passwords
            var myUser = "adminbea"; //given username
            var myPass = "tan"; //secret pw for now 

        //assigning variables with username and password from the md5Encrypt function to pass on as a string
        var myMd5User = md5Encrypt(myUser);
        var myMd5Pass = md5Encrypt(myPass);

        // console.log("username: " + myUser + ", Password: " + myPass);

        //assigning variables with encrypted username and passwords
        var validUser = md5Encrypt(inputUsername);
        var validPass = md5Encrypt(inputPassword);
        
        // console.log("Encrypt Password: " + validPass);
        // console.log("Encrypt Username: " + validUser);

        //LOGIC
        //compare the input of the user into a known stored value that should be matching

        //if inputUser is an empty string, 'No username entered'
        if(inputUsername === ""){
            return 'No username entered.';
        }

        //if inputPass is is an empty string, 'No password entered.'
        if(inputPassword === ""){
            return 'No password entered.';
        }

        //check if the input username and password are matching the valid username and password
        if(validUser === myMd5User && validPass === myMd5Pass){
            return true;
        } 
        //else if it is invalid
        else
        {
            return 'Invalid username or password.';
        }


    }//end checkLogin

