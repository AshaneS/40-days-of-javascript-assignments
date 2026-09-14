const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();


//Answer

// Charlie" and "" (empty string)


// why? 

/*
sayHello is a property of the person object whos value is a regular function.
so it is a method of the object.
person.sayHello( ) activates implicit binding and the "this" inside the function will be pointing to the object "person".\
so, this.name will print "charlie"


sayHelloArrow is a property of the person object and the value is an Arrow function.

arrow functions do not have their own "this" value.
arrow function will inherit the "this" from its outer lexical environment. 
in this case, the outer lexical environmnet is the global scope.
so this = window object.

by default there is a name property in the window object and it is ""
so, this.name will print ""(empty string)


*/