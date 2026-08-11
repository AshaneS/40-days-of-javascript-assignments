function createMultiplier(multiplier) {
  let val = multiplier;

  return function multiplied(number) {
    let answer = number * val;
    console.log("The answer is", answer);
  };
}

const calc = createMultiplier(6);
calc(20);
