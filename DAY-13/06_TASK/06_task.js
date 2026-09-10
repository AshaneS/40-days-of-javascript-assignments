// 6. Can you attach the car1's describe() method to car2 object?
//  Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

// Using Explicit binding - call

car1.describe.call(car2);

// Using Explicit binding - apply

car1.describe.apply(car2);

//Using Explicit binding - bind

const newCar = car1.describe.bind(car2);
newCar();

// The "this" inside the function will be bound to object that we have applied the explicit binding.
// with call and apply the function will be executed immediately.
// but bind returns a new function that we can invoke later.
