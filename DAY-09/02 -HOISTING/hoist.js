let name = "global";

function test() {
  console.log(name); // Throws ReferenceError!
  // let name = "local";
}

test();