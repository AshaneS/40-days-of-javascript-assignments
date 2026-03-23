
//object with let
let student = {
  name: "Ashane",
  age: 37,
  isStudent: true,
  language: "javascript",
};

// assining the student object to a new variable called teacher.
// changed the teacher name to alex. works with let
// This refers the same memory location
let teacher = student;
teacher.name = "Alex";

console.log("teacher name", teacher.name);
console.log("student name", student.name);

