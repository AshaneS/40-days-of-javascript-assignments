{

  //some code ---> TDZ for variabke age started here /TDZ for variable name started here / TDZ for variable city started here
  //some code
  console.log(city); //reference error

  //some code
  //some code
  //some code

  myAge(age); //reference error

  function myAge(age) {
    console.log(age);
  }

  //some code
  //some code
  let age = 10; //---> TDZ for variable age ended here

  let name = "silva"; //-->TDZ for variable name ended here
  console.log("name"); //No reference error

  const city = "colombo"; //-->TDZ for variable city ended here
  
}
