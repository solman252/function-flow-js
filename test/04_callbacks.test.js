const student = require('../starter/04_callbacks');

test('applyDiscount should apply ten percent discount correctly', () => {
  expect(student.applyDiscount(100, student.tenPercentOff)).toBe(90);
});
