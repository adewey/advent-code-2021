import alignCrabs from '..';

test(`--- Story ---`, () => {
  const input = ['16,1,2,0,4,2,7,1,2,14'];
  expect(alignCrabs(input, 2, true)).toEqual(206);
  expect(alignCrabs(input, undefined, true)).toEqual(168);
});
