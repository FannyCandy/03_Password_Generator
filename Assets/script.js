// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseAlphabetic = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabetic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "1234567890";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordLength = "";
// var passwordString = "";
// var userChoice = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var userChoice = "";
  var passwordString = "";

  passwordLength = window.prompt("Please enter the length of password you like, number in between 8 to 128");

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length needs to be a number in between 8 to 128, please try again.");
    return "";
  }

  if (window.confirm("Do you want to include lowercase letters?")) {
    userChoice = userChoice + lowercaseAlphabetic;
  }

  if (window.confirm("Do you want to include uppercase letters?")) {
    userChoice = userChoice + uppercaseAlphabetic;
  }

  if (window.confirm("Do you want to include numbers?")) {
    userChoice = userChoice + numericCharacters;
  }

  if (window.confirm("Do you want to include special characters?")) {
    userChoice = userChoice + specialCharacters;
  }

  console.log(userChoice);
  console.log(passwordLength);
  
  // loop through user's choice string and random pick to for passwordString
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * userChoice.length);
    passwordString += userChoice.charAt(randomIndex);
  }
  console.log(passwordString);
  return passwordString;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password <---------------
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password <-------------
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt <----------------
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page