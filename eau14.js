// Par ordre ASCII
/*
Créez un programme qui trie les éléments donnés en argument par ordre ASCII.

Exemples d’utilisation :
$> python exo.py Alfred Momo Gilbert
Alfred Gilbert Momo

$> python exo.py A Z E R T Y
A E R T Y Z

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/
const args = process.argv;
const inputsToSort = args.slice(2);
// Functions
const printError = (errorMessage) => {
  console.error(errorMessage);
};

const bubbleSortByAsciiValue = (arrayToSort) => {
  let newArrayWithAscii = arrayToSort.map((x) => x.charCodeAt(0)); // We get the ascii values from each element on the arrayToSort and put them in a new array
  let newArray = arrayToSort;
  for (let i = newArrayWithAscii.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (newArrayWithAscii[j] > newArrayWithAscii[j + 1]) {
        [newArrayWithAscii[j], newArrayWithAscii[j + 1]] = [
          newArrayWithAscii[j + 1],
          newArrayWithAscii[j],
        ];
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
      }
    }
  }
  return newArray;
};
// Handling errors
if (args.length < 3) {
  printError("Error. Not enough arguments.");
  return;
}
// Parsing

// Solving problem
const test = bubbleSortByAsciiValue(inputsToSort);

// Printing result
console.log(test);
