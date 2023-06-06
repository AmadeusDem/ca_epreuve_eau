// Différence minimum absolue
/*
Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.

Exemples d’utilisation :
$> python exo.py 5 1 19 21
2

$> python exo.py 20 5 1 19 21
1

$> python exo.py -8 -6 4
2

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
const userInputs = args.slice(2);
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};
const arrayContainsOnlyNumerics = (array) => {
  for (const element of array) {
    if (isNaN(element)) return false;
  }
  return true;
};
const calculateMinimumDifference = (array) => {
  let minimumDifference = Math.abs(array[0] - array[1]);
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const difference = Math.abs(array[i] - array[j]);
      if (difference < minimumDifference) {
        minimumDifference = difference;
      }
    }
  }
  return minimumDifference;
};
// Handling errors
if (args.length <= 3) {
  printError("Error. Not enough arguments.");
  return;
}
if (!arrayContainsOnlyNumerics(userInputs)) {
  printError("Error. Please enter only numerics.");
  return;
}

// Solving problem
const result = calculateMinimumDifference(userInputs);
// Printing result
console.log(result);
