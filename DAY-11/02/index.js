function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());


/* 

 - function () { return x * x; } is an annoonymous functions which is a closure that holds the
 reference to the variable x, declared in the outer function.

 - by calling testclosure(), returns this function and this testclosure will be finished executing.
 but the closure still holds the reference to the variable x and closed on variable x (which holds 10).

 - so when we do testClosure()(), the first () will return the annonymous function and the second (), will invoke it.

 - it will do x times x is 100 and prints 100 





*/
