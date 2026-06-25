const number_1 = 10;
const number_2 = 20;
let answer;

const operator = "*";

switch (operator) {
  case "+":
    answer = number_1 + number_2;
    break;
  case "-":
    answer = number_1 - number_2;
    break;
  case "/":
    answer = number_1 / number_2;
    break;
  case "*":
    answer = number_1 * number_2;
    break;
}

console.log(answer)
