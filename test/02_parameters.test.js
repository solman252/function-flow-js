const student = require('../starter/02_parameters');

test('totalScores should return the sum of scores', () => {
  const scores = [75, 80, 95];
  expect(student.totalScores(scores)).toBe(250);
});
