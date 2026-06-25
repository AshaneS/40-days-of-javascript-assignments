const sideA = 25;
const sideB = 26;
const sideC = 24;

let d1 = sideA - sideB;
let d2 = sideB - sideC;
let d3 = sideA - sideC;

if (sideA === sideB) {
  if (sideA === sideC) {
    console.log("Equilateral Triangle");
  } else {
    console.log("Isosceles Triangle");
  }
} else if (sideA === sideC) {
  if (sideA === sideB) {
    console.log("Equilateral Triangle");
  } else {
    console.log("Isosceles Triangle");
  }
} else if (sideB === sideC) {
  if (sideA === sideC) {
    console.log("Equilateral Triangle");
  } else {
    console.log("Isosceles Triangle");
  }
} else {
  console.log("Scalene Triangle");
}
