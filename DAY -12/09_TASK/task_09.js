//What’s the best way to deeply copy a nested object?
//Expalin with examples

const user = {
  name: "Alex",
  age: 28,
  address: {
    city: "New York",
    zipCode: "10001"
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
};


// we can use Object.assign to do a copy but it will only perform a shallow cloning
//primitive values are copied by value but nested objects are copied by reference

const userClone = Object.assign({}, user)

// modifying primitive data types
userClone.name = "John"

console.log(user.name) // Alex
console.log(userClone.name) // John

//moifying nested Object
userClone.address.city = "Los Angeles"

console.log(user.address.city) //Los Angeles
console.log(userClone.address.city) // Los Angeles

/*since user and userClone is referring to the same nested objects,
mutating a property will change results for both the original and copy
*/





//to make a the original and the copy fully independent, we can use structuredClone

const userClone2 = structuredClone(user)

//modifying primitive data types
user.name = "Peter"

console.log(user.name)
console.log(userClone2.name)

//modifying nested objects

user.address.city = "Philadelphia"

console.log(user.address.city) //philadelphia
console.log(userClone2.address.city) //Los Angeles

/*
sturcturedClone creates deep copy and all nested objects will get a new memory location, 
so mutating the original will not affect the clone, and vice versa 
*/



