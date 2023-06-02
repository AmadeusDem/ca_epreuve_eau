// Parametres à l'envers

const args = process.argv;

// Functions
function printError() {
  console.error("Error. Too few arguments");
}

// Handling errors
if (args.length < 3) {
  printError();
  return;
}

// Parsing and printing results
for (let i = args.length - 1; i > 1; i--) {
  console.log(args[i]);
}
