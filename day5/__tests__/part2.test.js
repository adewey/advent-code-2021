import { getInput } from '../../utils';
import overlappingPoints from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day5/input');
  expect(overlappingPoints(input, true)).toEqual(18442);
});
