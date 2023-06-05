// Index wanted
/*
Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.

Exemples d’utilisation :
$> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
6

$> python exo.py test test test
0

$> python exo.py test boom
-1

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;

//Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};

const parseArgumentsExceptTheLastOne = (arguments) => {
  let parsedArray = [];
  for (let i = 2; i < arguments.length - 1; i++) {
    parsedArray.push(arguments[i]);
  }
  return parsedArray;
};

const searchArgumentInArray = (array, argument) => {
  for (const [index, element] of array.entries()) {
    if (element === argument) return index;
  }
  return -1;
};

// Handling errors
if (args.length <= 2) {
  printError("Error. Not enough arguments.");
  return;
}

// Parsing
const arraySearched = parseArgumentsExceptTheLastOne(args);
const argumentToSearch = args.slice(-1)[0];

// Solving problem
const result = searchArgumentInArray(arraySearched, argumentToSearch);
// Printing results
console.log(result);
