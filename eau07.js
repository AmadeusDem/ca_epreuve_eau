// Majuscule
/*
Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.


Exemples d’utilisation :
$> python exo.py “bonjour mathilde, comment vas-tu ?!”
Bonjour Mathilde, Comment Vas-tu ?!


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
const userInput = args[2];

// Functions
function printError() {
  console.error("Error.");
}

function upperCaseStartOfWords(input) {
  let previousChar = '';
  let returnString = "";
  for (char of input) {
    if (checkPreviousChar(previousChar)) {
      char = char.toUpperCase();
    }
    previousChar = char;
    returnString += char;
  }
  return returnString;
}

function checkPreviousChar(previousChar) {
  return previousChar === '\t' || previousChar === '\n' || previousChar === ' ' || previousChar === '';
}

// Handling errors
if (args.length !== 3) {
  printError();
  return;
}
if (!isNaN(userInput)) {
  printError();
  return;
}

// Solving problem
const result = upperCaseStartOfWords(userInput);

// Printing result
console.log(result);