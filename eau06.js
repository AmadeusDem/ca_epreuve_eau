// Majuscule sur deux
const args = process.argv;
const userInput = args[2];
// Functions
function printError() {
  console.error("Error.");
}

function oneInTwoUpperCase(userString) {
  let upper = true;
  let lower = false;
  let returnString = "";
  for (let char of userString) {
    const isALetter = char.match(/[a-zA-Z]/gm) !== null;
    if (isALetter) {
      if(upper) char = char.toUpperCase();
      if(lower) char = char.toLowerCase();
      upper = !upper;
      lower = !lower;
    }
    returnString += char;
  }
  return returnString;
}

// Handling errors
if (args.length !== 3) {
  printError();
  return;
}
if (!isNaN(userInput)) {
  printError();
  return;
}

// Solving problems
const result = oneInTwoUpperCase(userInput);

// Printing results
console.log(result);