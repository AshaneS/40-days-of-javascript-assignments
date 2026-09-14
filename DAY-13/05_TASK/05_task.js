const Sport = function (name, numberOfPlayers) {
  this.name = name;
  this.numberOfPlayers = numberOfPlayers;

  this.logDetails = function () {
    console.log(`A ${this.name} team has ${this.numberOfPlayers} players`);
  };
};

const cricketSport = new Sport("cricket", 11);
const basketballSport = new Sport("basketball", 5);

//cricket team
cricketSport.logDetails();
//basketball team
basketballSport.logDetails();

console.log("I'm window", this);

const user = {
  userName: "Alex",
  age: "35",
  getBio: function () {
    return ()=> console.log(this.userName, this.age);
  },
};

user.getBio()();

function one(a) {
  console.log("function one", this);
  function two(b) {
    console.log("function two", this);
  }
  two();
}

one(12);

("use strict");

const getCar = () => console.log("arrow function in global scope", this);
getCar();
