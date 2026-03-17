let userName = "Ashane";
let isStudent, language;
const age = 37;
isStudent = true;
language = "JavaScript";

console.log("user name is", userName);
console.log("Age is", age);
console.log("is a student", isStudent);
console.log("favourite Language", language);

// re-assigning works for let declaration
userName = "Alex";
console.log("user name is", userName);

// reassigning fails for const
// age = 40;
// console.log("Age is", age);
// script.js:20 Uncaught TypeError: Assignment to constant variable.
// at script.js:20:5



//object with let
let student = {
  name: "Ashane",
  age: 37,
  isStudent: true,
  language: "javascript",
};

// Array with let
let student_scores = [67, 88, 98, 45, 100];

console.log("student name", student.name);
console.log("student marks", student_scores);

// assining the student object to a new variable called teacher.
// changed the teacher name to alex. works with let
let teacher = student;
teacher.name = "Alex";
console.log("teacher name", teacher.name);
console.log("student name", student.name);

let teacher_scores = student_scores;
console.log("teacher_scores", teacher_scores);


// re-assigned first value to 250
teacher_scores[0] = 250;
console.log("teacher_scores", teacher_scores);
console.log("student_scores", student_scores);

// let allowed to reassign the whole object
student = {
  lastName: "Silva",
  salary: 55000,
};
console.log("new student last name", student.isStudent);

// .............................................

// object with const
const person = {
  name: "john doe",
  age: 44,
  isStudent: false,
  language: "python",
};
// Array with const
const person_marks = [33, 55, 66, 22];

console.log("student name", person.name);
console.log("student marks", person_marks);

// reassiging name as mark
person.name = "Mark";
console.log("student name", person.name);

// reassiging first mark to 350
person_marks[0] = 350;
console.log("student marks", person_marks);


// const doesnt allow to re-assign the object
// person = {
//   lastName: "Silva",
//   salary: 55000,
// };
