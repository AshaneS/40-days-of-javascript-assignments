// T-001: Create an array of 5 elements using the Array Constructor.

const superCars = new Array(
  "ferrari",
  "mclaren",
  "porsche",
  "maserati",
  "lamborgini",
);
console.log("super cars", superCars);

// T-002: Create an array of 3 empty slots.

const emptyArray = new Array(3);
console.log("empty Array", emptyArray);

// T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

const guitars = ["prs", "gibson", "ibanez", "fender", "esp", "yamaha"];
console.log("fourth element is ", guitars[guitars.length - 3]);

// T-004: Use the for loop on the above array to print elements in the odd index.

for (let i = 0; i <= guitars.length - 1; i++) {
  if (i % 2 != 0) {
    console.log(guitars[i]);
  }
}

// T-005: Add one element at the front and the end of an array.

guitars.unshift("taylor"); //adding at the front
console.log(guitars);

guitars.push("jackson"); //adding at the end of the array
console.log(guitars);

// T-006: Remove an element from the front and the end of an array.

guitars.shift(); //remove from front
console.log(guitars);

guitars.pop(); //remove from end
console.log(guitars);

// T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

const myFood = [
  "burger",
  "avacado",
  "pizza",
  "salad",
  "cocolate",
  "fish",
  "mango",
  "fries",
  "ramen",
  "chicken",
];

const [, , , , , sixthFood] = myFood;
console.log("sixth element is", sixthFood)


// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter

const[food_1, food_2, ...rest] = myFood; //using REST parameter
console.log("last 8 food items", rest)

// T-009: Clone an Array(Shallow cloning)
const mynewFood = [...myFood] //using the spread operator
console.log("cloned array", mynewFood)

