// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
// Input Variables
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;

//variable values
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

var char = ["!", "@", "#", "$", "%", "^", "&", "+", "(", ")", "-", "_", "+", "=", "{", "[", "}", "]", ":", ";", "'", "|", ",", ".", "<", ">", "?", "/", "~", "~"];

//function to generate password with prompt for password length, numbers, characters, uppercase letters and lowercase letters
//function includes window alert with messages 
function generatePassword() {
  let length = (prompt("Between 8-128, how many characters would you like your password to be?"));
  if (!length) {
      alert("Input invalid");
      return 'Click "Generate Password" to start over'
  } else {
    // Continues once user input is validated
    var allowNumbers = confirm("Your password will have numbers.");
    
    var allowSpecials = confirm("Your password will have special characters.");
    
    var allowUppercase = confirm("Your password will have uppercase letters.");
    
    var allowLowerCase= confirm("Your password will have lowercase letters.");
    
  }  

  //provided concat method to concatenate arrays
  //contribution note: https://www.w3schools.com/jsref/jsref_concat_string.asp , https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 
  //contribution note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

  var passCreate = []
    if (allowNumbers) {
      passCreate = passCreate.concat(num)
    }
    if (allowSpecials) {
      passwordCreate = passCreate.concat(char)
    }
    if (allowUppercase) {
      passreate = passCreate.concat(upper)
    }
    if (allowLowerCase) {
      passCreate = passCreate.concat(lower)
    }

  // string variable and loop to get random password from array
      var ranPass = ""
      
      for (var i = 0; i < length; i++) {
        ranPass = ranPass + passCreate[Math.floor(Math.random() * passCreate.length)];
        console.log(ranPass)
      }
      return ranPass;
}
  

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
