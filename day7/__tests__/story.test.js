import alignCrabs from '..';

test(`--- Story ---`, () => {
  const input = ['16,1,2,0,4,2,7,1,2,14'];
  expect(alignCrabs(input, 1)).toEqual(41);
  expect(alignCrabs(input, 2)).toEqual(37);
  expect(alignCrabs(input, 3)).toEqual(39);
  expect(alignCrabs(input, 10)).toEqual(71);
  expect(alignCrabs(input)).toEqual(37);
});
