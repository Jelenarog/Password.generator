// array for numeric, specials characters, upper, and lowe case

function generatePassword() {
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\",", "^", "_", "`", "{", "|", "}", "~"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var userCharacterSelection = [];//var to store confirm characters
  //confirm what characters do you want to use, for each option please confirm
  var characterName = [" numbers", " special characters", " uppercase letters", " lowercase letters"]
  var characters = [numeric, symbols, uppercase, lowercase]; //variables stored in array for loop confirm 
  var randomIn = [];//array to store random indexes of User character selection
  var indexCombiner = [];//to store all random Characters 
  var generatedPassword = "";//string to store generated password

  //function for character selection
  var chooseCharacter = function () {
    for (var i = 0; i < characters.length; i++) {
      var selectCharacter = window.confirm("Would you like to use" + characterName[i] + "?");
      if (selectCharacter) {// what character user wants to use
        console.log(characters[i]) 
        userCharacterSelection = userCharacterSelection.concat(characters[i]);//reassign +answer in var userCharacterSelection we will use as an array when generating password

      }
    };
  };

  //password length prompt how  many characters to use, alert if <8 or >128 otherwise call function what characters to use
  var passwordLength = window.prompt("How many characters would you like your password to contain? Choose a length of at least 8 characters and no more than 128 characters");

  while (passwordLength < 8 || passwordLength > 135 || isNaN(passwordLength)){
      window.alert("Please choose a number between 8 nad 128.");
      passwordLength = window.prompt("How many characters would you like your password to contain? Choose a length of at least 8 characters and no more than 128 characters");
      };
    if (passwordLength >= 8 && passwordLength <= 128) {
      chooseCharacter();
      var randomIndex = function () {  //random index function to select random index from list of characters user wants to use
        for (i = 0; i < passwordLength; i++) {
          randomIn[i] = Math.floor(Math.random() * userCharacterSelection.length);
        }
      }
      randomIndex();
    };
 
 //store all random Characters in variable indexCombiner
  for (i = 0; i < randomIn.length; i++) {
    indexCombiner[i] = userCharacterSelection[randomIn[i]];
  }

  
  //display generated password as string
  var cobminedCharacters = function (val) {
    generatedPassword += val;
  }
  indexCombiner.forEach(cobminedCharacters);
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);