const student = require('../starter/03_scope');

test('setRole should log the correct local role', () => {
  console.log = jest.fn();
  student.setRole();
  expect(console.log).toHaveBeenCalledWith("Inside function:", "admin");
});
