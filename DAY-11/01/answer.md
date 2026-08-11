
# The output will be 
 - counter(); -> 1
 - counter(); -> 2

# Explanation

- the inner() is a closure that remembers varibles that are decalred in it's lexical scope(outer function).

 - the counter variable holds a reference to innner() which still holds a reference to the count variable even the outer() has finished executing.

 - so when we call counter(), it will add 1 to the previosly closed count value which is 0, and prints 1.
 
- since the closure holds a reference to the variable count, it holds the latest value.

- then when we call counter() again it will add 1 to count and prints 2