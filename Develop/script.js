// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function when event listener is clicked
function generatePassword() {
  var characterLength = prompt("How many characters would you like your password to be?");
  while((characterLength < 8)||(characterLength > 128)||(isNaN(characterLength)===true)){
    alert("Password must be a number and must contain at least 8 and no more than 128 characters.")
    characterLength = prompt("How many characters would you like your password to be?");
  }
  // Ask the questions specifying the password composition
  var pickLowerCase = confirm("Would you like to add lowercase characters?");
  var pickUpperCase = confirm("Would you like to add uppercase characters?");
  var pickNumeric = confirm("Would you like to add numbers?");
  var pickSpecialCharacters = confirm("Would you like to add special characters?");
  // Make password bank
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric = "0123456789"
  var specialCharacters = "!@#$%^&*()"
  var passwordBank = ""
  var finalPassword = ""
  // If user confirms then add to bank
  if (pickLowerCase === true){
    passwordBank = passwordBank.concat(lowerCase)
  }
  if (pickUpperCase === true){
    passwordBank = passwordBank.concat(upperCase)
  }
  if (pickNumeric === true){
    passwordBank = passwordBank.concat(numeric)
  }
  if (pickSpecialCharacters === true){
    passwordBank = passwordBank.concat(specialCharacters)
  }
  // Make function to randomize characters in temporary bank
  function randomizeCharacters(max){
    return[Math.floor(Math.random() * max)]
  }
  for(var i=0;i<characterLength;i++){
    finalPassword=finalPassword.concat(passwordBank.charAt(randomizeCharacters(passwordBank.length - 1)))
  }
  return finalPassword;
}