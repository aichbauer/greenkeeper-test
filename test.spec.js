const { date } = require('./index');

test('test if date', () => {
  const isDate = date('22/12/2018');

  expect(date).toBeTruthy();
});
