// I think I need recusion for this
// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
//and 1! = 1 -> base case
//and 0! = 1 -> base case

let fact = 0;

function factorial(n) {
  if (n === 1) {
    return 1;
  } else if (n === 0) {
    return 1;
  }

  return (fact = n * factorial(n - 1));
}

const factorialNumber = factorial(5);
console.log("factorial is :", factorialNumber);
