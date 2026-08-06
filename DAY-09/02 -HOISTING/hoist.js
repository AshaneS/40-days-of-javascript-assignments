let a = 10;
const b = 15;

let sum;
test();

function test() {
  sum = a + b;
  console.log("The sum is", sum);
}

/*
 GEC creation process
variable a, b, sum are hoisted but unintialized(because they are let and const) 
 if the variables are defined with var - they are hoisted and initilized as undefined.
the test() function declaration will be fully hoisted. 

 during the Execution Process
 a = 10
 b = 15

 FEC for test()
 sum = 25
 prints The sum is 25

 Hoisting is JavaScript's behavior of allocating memory for variable and function declarations during the Creation Phase before any code is executed.
var variables are hoisted and initialized to undefined, and let/const variables are hoisted but left uninitialized in the Temporal Dead Zone until their declaration line executes.
*/
