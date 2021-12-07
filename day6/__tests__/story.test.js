import simulateLanternfish from '..';

test(`--- Story ---`, () => {
  const input = ['3,4,3,1,2'];
  expect(simulateLanternfish(input, 18)).toEqual(26);
  expect(simulateLanternfish(input, 80)).toEqual(5934);
});
