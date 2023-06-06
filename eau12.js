// Tri à bulle
/*
Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_bubble_sort(array) {
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
const bubbleSort = (arrayToSort) => {
  let newArray = arrayToSort.map((element) => parseInt(element));
  for (let i = newArray.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (newArray[j] > newArray[j + 1]) {
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
if (!arrayContainsOnlyNumerics(inputsToSort)) {
  printError("Error. Please enter only numbers.");
  return;
}
// Solving problem
const sortedArray = bubbleSort(inputsToSort);

// Printing result
console.log(sortedArray);
