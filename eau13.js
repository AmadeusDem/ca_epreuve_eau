// Tri par sélection
/*
Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_select_sort(array) {
	# votre algorithme
	return (new_array)
}

Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6

$> python exo.py test test test
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

Wikipedia vous présentera une belle description de cet algorithme de tri.
*/
const args = process.argv;
const inputsToSort = args.slice(2);
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
const selectSort = (arrayToSort) => {
  let newArray = arrayToSort.map((element) => parseInt(element));
  for (let i = 0; i < newArray.length; i++) {
    let indexSmallestNumber = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[j] < newArray[indexSmallestNumber]) {
        indexSmallestNumber = j;
      }
    }
    if (indexSmallestNumber != i) {
      [newArray[i], newArray[indexSmallestNumber]] = [
        newArray[indexSmallestNumber],
        newArray[i],
      ];
    }
  }
  return newArray;
};

// Handling errors
if (args.length < 4) {
  printError("Error. Not enough arguments.");
  return;
}
if (!arrayContainsOnlyNumerics(inputsToSort)) {
  printError("Error. Please enter only numbers.");
  return;
}
// Parsing

// Solving problem
const sortedArray = selectSort(inputsToSort);

// Printing result
console.log(sortedArray);
