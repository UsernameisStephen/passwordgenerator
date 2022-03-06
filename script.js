// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
// Input Variables
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;

//variable values
let lower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
let num = [1,2,3,4,5,6,7,8,9];
let char = ["!", "@", "#", "$", "%", "^", "&", "+", "(", ")", "-", "_", "+", "=", "{", "[", "}", "]", ":", ";", "'", "|", ",", ".", "<", ">", "?", "/", "~", "~"];

//function to generate password with prompt for password length, numbers, characters, uppercase letters and lowercase letters
//function includes window alert with messages 
function generatePassword() {
  var length = prompt("Between 8-128, how many characters would you like your password to be?");
  if (!length) {
      alert("Input invalid");
      return 'Click "Generate Password" to start over'
  } else {
    // Continues once user input is validated
    allowNumbers = confirm("Your password will have numbers.");
    allowSpecials = confirm("Your password will have special characters.");
    allowUppercase = confirm("Your password will have uppercase letters.");
    allowLowercase = confirm("Your password will have lowercase letters.");
  }


  return finalResult;
   
}  


//  Write password to the #password input
function writePassword() {
  finalResult = generatePassword ();
  passwordText = document.querySelector("#password");
  passwordText.value = finalResult;
  }


//  Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
