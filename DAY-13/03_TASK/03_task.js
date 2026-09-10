const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();

/*

- greet is a method inside the object "obj" and the method is a regualar function and has "this" keyword in it.
- the function is assigned as value to the variable greetFn.
- but when greetFn is invoked, we are not invoking with the dot notation, on the object that the method is defined.
- insted we are invoking greetFn( ) as a standalone function.
- so in this case the implicit binding is not happening and this regular function's "this" will point to the window object. 
- so window.name will be empty
- and the console log will print Hello,!
*/

//fix 
// invoking the function direclty on the object
// so the "this" will point to the object with implicit binding. and this.name = "Tom"

const obj_1 = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greet();
