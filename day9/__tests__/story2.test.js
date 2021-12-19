import riskLevels from '..';

test(`--- Story ---`, () => {
  const input = [
    '2199943210',
    '3987894921',
    '9856789892',
    '8767896789',
    '9899965678',
  ];
  expect(riskLevels(input, true)).toEqual(1134);
});
