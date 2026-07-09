function greet(name, callback) {
  callback(name);
}

// call back function
const myGreet = function (name) {
  console.log("Have a nice day " + name);
};


greet("Ashane", myGreet);