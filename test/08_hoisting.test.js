const student = require('../starter/08_hoisting');

test('greet should log welcome message', () => {
  console.log = jest.fn();
  student.greet();
  expect(console.log).toHaveBeenCalledWith("Welcome to the course!");
});
