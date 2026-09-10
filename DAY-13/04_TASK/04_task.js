
const user = {
  name: "Alex",
  greet: function () {
 
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();

/*

greet is a user object's property which has a function as a value(a method).
user.greet( ) activates implicit binding and the "this" inside greet will point to the "user" object.

however the inner function is a standalone function. And it is not a "user" object's method.
The "this" keyword inside a stanalone function will always point to the window object in "non-strict" mode.
and will be undefined in "strict-mode".

In Strict Mode-

In strict mode, this.name will throw an error as "cannot read properties of undefined". 

Non-Strict Mode-

In the "non-strict mode", the "this" will point to the window object. 
And this.name resolves to window.name and the default value for window.name is "".

so the console.log will print "Hello! " in the non-strict mode. 

*/