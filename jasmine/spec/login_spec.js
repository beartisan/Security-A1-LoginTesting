// console.log("Jasmine");

//JASMINE TESTING FOR checkLogin
describe("Test for checkLogin function", () => {
    //TEST TO PASS : Welcome back!
    describe("Test to Pass or Successful Log-in", () => {
        //return a true (boolean) test if the username AND password matches
        it("should return boolean TRUE if the username and password match", () => {
            const trueUsername = "adminbea";
            const truePassword = "tan";
            expect(checkLogin(trueUsername, truePassword)).toEqual(true);
        });
        //return a 32-hexadecimal string: string
        it("should encrypt the input string and return a 32 character hexadecimal string", () => {
            const inputString = "test string";
            const regexOutput = /[a-f0-9]{32}/;
            expect(md5Encrypt(inputString)).toMatch(regexOutput);
        });
        //return a 32-hexadecimal string: number
        it("should encrypt the input string and return a 32 character hexadecimal string", () => {
            const inputString = "012345";
            const regexOutput = /[a-f0-9]{32}/;
            expect(md5Encrypt(inputString)).toMatch(regexOutput);
        });
    }); //end test to Pass

     //TEST TO FAIL : Unsuccessful
    describe("Test to Fail or Unsuccessful log-in", () => {
        var trueUsername = "adminbea";
        var truePassword = "tan";

        // --if no username was entered because it's an empty string, 'No username entered' will be returned
        it("should return 'No username entered.' if the input username is an empty string", () =>{
            expect(checkLogin("", truePassword)).toEqual("No username entered.")
        });

        // --if no password was entered because it's an empty string, 'No password entered' will be returned 
        it("should return 'No password entered.' if the input password is an empty string", () =>{
            expect(checkLogin(trueUsername, "")).toEqual("No password entered.")
        });

        // --if the username or password mismatches with the given, an 'Invalid username or password' warning will be output, or if the password input does not patch with the valid password, or if the username input does not match the valid username
        //case sensitive
        it("should return 'Invalid username or password.' if the input username mismatches", () =>{
            expect(checkLogin("adminBea", "TAN")).toEqual("Invalid username or password.")
        });

        //incorrect spelling 
        it("should return 'Invalid username or password.' if the input username mismatches", () =>{
            expect(checkLogin("beaadmin", truePassword)).toEqual("Invalid username or password.")
        });

    });//end boundary Tests
});//end describe test for validate Login