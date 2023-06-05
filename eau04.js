// Prochain nombre premier
const args = process.argv;
const userInput = args[2];

// Functions
function isPrimeNumber(number) {
  let prime = true;
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    prime = number % i !== 0;
    if (!prime) break;
  }
  return prime;
}

function closestPrimeNumber(number) {
  while (!isPrimeNumber(number)) {
    number++;
  }
  return number;
}

function printError() {
  console.error(-1);
}

// Handling errors
if (args.length !== 3) {
  printError();
  return;
}
if (userInput < 0 || isNaN(userInput)) {
  printError();
  return;
}
// Solving the problem
const result = closestPrimeNumber(userInput);

// Printing results
console.log(result);
