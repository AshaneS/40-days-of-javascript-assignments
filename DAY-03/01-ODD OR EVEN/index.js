const number = 1023;

// if (number % 2 === 1) {
//   console.log(`${number} is odd`);
// } else {
//   console.log(`${number} is even`);
// }

// using the ternary operator
const result = (number % 2 == 1) ? `${number} is odd` : `${number} is even`;
console.log(result);
