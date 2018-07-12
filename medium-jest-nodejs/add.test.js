const add = require('./add');

test('adding 10 + 20', () => {
  const sum1 = add.sum(10, 20);
  expect(sum1).toBe(30);
})