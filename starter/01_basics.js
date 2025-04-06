// TODO: Create a student object with 'name' and 'age' properties
// TODO: Write a function 'printStudentName' that logs the student's name

let ExampleStudent = {name:"Bob",age:32}
let ExampleStudentB = {name:"Jeff",age:12}

function printStudentName(student) {
  // Your code here
  console.log(student.name)
}

printStudentName(ExampleStudent)
printStudentName(ExampleStudentB)

module.exports = { printStudentName };
