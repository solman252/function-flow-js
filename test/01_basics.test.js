const student = require('../starter/01_basics');

test('printStudentName should log the correct student name', () => {
  console.log = jest.fn();
  student.printStudentName();
  expect(console.log).toHaveBeenCalledWith("Student name is:", "Ava");
});
