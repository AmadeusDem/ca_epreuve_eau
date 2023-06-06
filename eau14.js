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

const invertTwoIndexesInArray = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const bubbleSortByAsciiValue = (arrayToSort) => {
  let newArray = [...arrayToSort];
  for (let i = newArray.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (newArray[j].charCodeAt(0) === newArray[j + 1].charCodeAt(0)) {
        if (newArray[j] > newArray[j + 1]) {
          invertTwoIndexesInArray(newArray, j, j + 1);
        }
      } else if (newArray[j].charCodeAt(0) > newArray[j + 1].charCodeAt(0)) {
        invertTwoIndexesInArray(newArray, j, j + 1);
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
