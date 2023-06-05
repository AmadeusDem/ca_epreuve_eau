// Combinaison de 3 chiffres

let combinations = [];

// Functions I declare
function combinationOfThreeDigits(array) {
  let combinationString;
  for (let i = 0; i < 8; i++) {
    for (let j = 1; j < 9; j++) {
      for (let k = 2; k < 10; k++) {
        k > j && j > i && array.push(`${i}${j}${k}`);
      }
    }
  }
}

// Problem solving
combinationOfThreeDigits(combinations);

// Print results
for (let combination of combinations) {
  console.log(combination);
}
