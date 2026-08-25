const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};


// answer

const {
  name,
  company: {
    name: companyName,
    location: { city },
  },
} = person;
console.log(name, companyName, city);
