// TODO: Write a function 'greet' and call it before its definition
// TODO: Write a function 'showUserData' where you use a variable before declaring it with var

greet()

function greet() {
  // Your code here
  console.log('Hello user')
}

function showUserData() {
  // Your code here
  console.log(userData)
}
showUserData()
var userData = ['Bob', 32]
showUserData()
module.exports = { greet, showUserData };
