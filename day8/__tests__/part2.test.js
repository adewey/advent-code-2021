import { getInput } from '../../utils';
import decodePattern from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day8/input');
  expect(decodePattern(input, true)).toEqual(983026);
});
