// Suite de Fibonacci
const args = process.argv;

// Functions
function printError() {
  console.log(-1);
}

// Very basic fibonnaci sequence with recursive (not very optimized for big numbers though)
function fibonnaciSequence(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1 || n == 2) {
    return 1;
  } else {
    return fibonnaciSequence(n - 1) + fibonnaciSequence(n - 2);
  }
}

// Handling errors
if (args.length !== 3) {
  printError();
  return;
}
if (isNaN(args[2]) || args[2] < 0) {
  printError();
  return;
}

// Parsing
const userInput = args[2];

// Solving problem
const result = fibonnaciSequence(userInput);

// Printing result
console.log(result);
