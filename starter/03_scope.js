// TODO: Create a global variable 'role' with value "guest"
// TODO: Write a function 'setRole' that declares a local variable also called 'role' with value "admin"
// TODO: Log the local role inside the function
// TODO: Write another function 'showGlobalRole' that logs the global role

let role = "guest";

function setRole() {
  // Your code here
  let role = "admin" // declares local variable inside function called role and assigns value admin
  console.log(role) // prints local variable
}

function showGlobalRole() {
  // Your code here
  console.log(role)// prints global variable
}
setRole() // calls function setRoll with the local role variable
showGlobalRole() // calls fucntion showGlobalRole with the global variable

module.exports = { setRole, showGlobalRole, role };
