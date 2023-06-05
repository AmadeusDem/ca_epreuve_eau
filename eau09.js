// Entre min et max
/*
Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.

Exemples d’utilisation :
$> python exo.py 20 25
20 21 22 23 24

$> python exo.py 25 20
20 21 22 23 24

$> python exo.py hello
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
const arg1 = args[2];
const arg2 = args[3];
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};

const argLengthIsNotEqualTo = (arguments, length) => {
  return arguments.length !== length ? true : false;
};

const printNumbersBetweenMinAndMax = (min, max) => {
  for (let i = min; i < max; i++) {
    console.log(i);
  }
};

// Handling errors
if (argLengthIsNotEqualTo(args, 4)) {
  printError("Error. There is not enough arguments or too much arguments.");
  return;
}
if (isNaN(arg1) || isNaN(arg2)) {
  printError("Error. The arguments need to be numeric.");
  return;
}
const minNumber = arg1 < arg2 ? arg1 : arg2;
const maxNumber = arg1 > arg2 ? arg1 : arg2;

if (minNumber === maxNumber) {
  printError("Error. Both numbers are equal.");
}

printNumbersBetweenMinAndMax(minNumber, maxNumber);
