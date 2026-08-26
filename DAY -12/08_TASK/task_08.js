// What will be the output and why?

const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);

/* 
person is an object and there is a specific memory location in the heap memory for that object.

const newperson = person 
- we copy the memory reference from person and assign to newperson rather than creating a new object.
now both variables reference exactly the same object in the memory location. 

newperson.name = "Doe" will change the value of the name to "doe".
since newperson and person are pointing to the same object, 
console.log(person.name); will print "Doe".

objects are reference Types. objects in javascript are stored and passed by reference not by value.


*/
