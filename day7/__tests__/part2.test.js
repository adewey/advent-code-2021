import { getInput } from '../../utils';
import alignCrabs from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day7/input');
  expect(alignCrabs(input, undefined, true)).toEqual(99634572);
});
