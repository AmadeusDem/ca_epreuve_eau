// Combinaison de 3 chiffres

let combinations = [];

// Functions I declare
function combinationOfThreeDigits(array) {
  let a = 0;
  let b = a + 1;
  let c = b + 1;
  let combinationString;
  
  while (a < 8) {
    while (c < 10) {
      combinationString = `${a}${b}${c}`;
      array.push(combinationString);
      c++;
    }
    if (b === 9 && c === 10) {
      a++;
      b = a + 1;
      c = b + 1;
    } else {
      b++;
      c = b + 1;
    }
  }
}

// Problem solving
combinationOfThreeDigits(combinations);

// Print results
for(let combination of combinations) {
  console.log(combination);
}