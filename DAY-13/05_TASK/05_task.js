const Sport = function (name, numberOfPlayers) {
  this.name = name;
  this.numberOfPlayers = numberOfPlayers;

  this.logDetails = function () {
    console.log(`A ${this.name} team has ${this.numberOfPlayers} players`)
  }
};

const cricketSport = new Sport("cricket", 11);
const basketballSport = new Sport("basketball", 5);


//cricket team
cricketSport.logDetails()
//basketball team
basketballSport.logDetails()



