function counter() {
  let count = 0;

  return {
    increment: function () {
      count = count + 1;
      console.log("The count increased : new count ", count);
    },

    decrement: function () {
      count = count - 1;
      console.log("The count decreased : new count ", count);
    },

    reset: function () {
      count = 0;
      console.log("The count has reset ", count);
    },
  };
}

const myCounter = counter();

myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();

// decrement
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();

//reset

myCounter.reset();
