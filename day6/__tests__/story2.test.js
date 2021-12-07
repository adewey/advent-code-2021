import simulateLanternfish from '..';

test(`--- Story ---`, () => {
  const input = ['3,4,3,1,2'];
  expect(simulateLanternfish(input, 256)).toEqual(26984457539);
});
