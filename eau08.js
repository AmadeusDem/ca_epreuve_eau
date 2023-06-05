// Chiffres only
/*
Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.


Exemples d’utilisation :
$> python exo.py “4445353”
true


$> python exo.py 42
true

$> python exo.py “Bonjour 36”
false

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
const userInput = args[2];

// Functions
function printError() {
  console.error("Error.");
}

function isANumber(input) {
  for (char of input) {
    const isNotADigit = char.match(/\d/) === null;
    if (input.length < 2 && isNotADigit) {
      return false;
    }
    if (char === "-" || char === "." || char === ",") {
      continue;
    } else if (isNotADigit) {
      return false;
    }
  }
  return true;
}

// Handling errors
if (args.length !== 3) {
  printError();
  return;
}
if (args[2] === null) {
  printError();
  return;
}

// Solving problem
const result = isANumber(userInput);
// Printing results
console.log(result);
