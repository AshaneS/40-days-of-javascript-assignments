/* const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet(); */


/*
the problem - 
console.log doesn't print the name

Why?

- Arrow functions does not have their own "this".The "this" will be inherited from the outer scope where the arrow function is lexically defined.
- in this case, arrow function is lexically defined inside the object, and the outer scope of the object is the global scope.
- so "this" is now connecting to the window object. and since there is no name in the window object, this.name will print empty string.
*/

//fix
// by using a regular function

const user = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();

/* 

 - now greet is a method which is is a regular function.
 - and we are invoking the method on the user object. 
 - since this is implicit binding, the this keyword is now pointing to the object user, which we have invoked the method. 
 - so name = "tapaScript". 


*/