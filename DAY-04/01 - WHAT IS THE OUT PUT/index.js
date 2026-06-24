let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

//out put: "It's a normal day"

/* reason: the variable day = Monday
so the case "monday " is not a match because the strings "Monday" and "monday" are different.

so since there are no cases to match, it will execute the default "It's a normal day."

*/
