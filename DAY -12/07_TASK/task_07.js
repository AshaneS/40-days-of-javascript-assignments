//How do you check if an object has a certain property?

//answer -  we can use the In operator

//example
const employee = {
  name: "john doe",
  age: 39,
  salary: "$8900",
};

console.log("salary" in employee); //true
console.log("address" in employee); //false
