import depthIncreases from '..';

test(`--- Story ---`, () => {
  const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  expect(depthIncreases(input)).toEqual(7);
});
