function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    // if numbers are equal return num1
    return num1;
  }
}

const max = findMax(52, 51);
console.log(max);
