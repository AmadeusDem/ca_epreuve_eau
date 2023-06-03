// String dans string
const args = process.argv;
const userString = args[2];
const userSubstring = args[3];
// Functions
function substringIsInString(string, substring) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === substring[0] && i + substring.length - 1 < string.length) {
      let slice = string.slice(i, i+substring.length);
      if(substring === slice) {
        return true;
      }
    }
  }
  return false;
}
function printError() {
  console.error("Error.");
}
// Handling errors
if (args.length !== 4) {
  printError();
  return;
}
if (userString === undefined || userSubstring === undefined) {
  printError();
  return;
}

// Solving problems
const result = substringIsInString(userString, userSubstring);

// Printing results
console.log(result);