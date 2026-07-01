let number = 56984236;
// converting the number to a string so I can use charAt() and length
let numberToString = number.toString();
let position = numberToString.length;
let reversedString = "";

while (position >= 0) {
  reversedString += numberToString.charAt(position);
  position--;
}

// converting the reversed string back to a number
console.log(Number(reversedString));
