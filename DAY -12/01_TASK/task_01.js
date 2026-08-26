const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// answer

/*

user.age is undefined. so the returned value will be "Not Provided".


with nullish coalescing operator, 
 -- if the first expression is null or undefined return the second
 -- if the first expression is neither null nor undefined returns the first. 

 */
