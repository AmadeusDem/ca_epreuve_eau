// Combinaison de 2 nombres
let combinations = [];

// Functions
function combinationOfTwoNumbers(array) {
  for (let i = 0; i < 99; i++) {
    for (let j = 1; j < 100; j++) {
      if (i < j) {
        let firstNumber = i < 10 ? "0" + i : i;
        let secondNumber = j < 10 ? "0" + j : j;
        array.push(`${firstNumber} ${secondNumber}`);
      }
    }
  }
}

// Problem solving
combinationOfTwoNumbers(combinations);

// Results
for (let combination of combinations) {
  process.stdout.write(` ${combination},`);
}
