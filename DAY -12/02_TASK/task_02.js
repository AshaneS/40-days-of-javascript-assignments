const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

/* 
- freeze makes the object completely immutable.
- so we cannot add, delete or modify properties
- so in this case, property values wont change
*/
