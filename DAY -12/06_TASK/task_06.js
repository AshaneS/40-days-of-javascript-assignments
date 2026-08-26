//What is the difference between Object.keys() and Object.entries()?
// Explain with examples

//Object.Entries will transfer the object into an array and Object.keys will give only the keys in the object

const employee = {
  name: "john doe",
  age: "45",
  company: "ABC company",
  salary: "$3000",
};

console.log(Object.entries(employee)); // will convert the employee object into an Array
console.log(Object.keys(employee)); // will print all keys in the object
