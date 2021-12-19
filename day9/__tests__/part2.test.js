import { getInput } from '../../utils';
import riskLevels from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day9/input');
  expect(riskLevels(input, true)).toEqual(1019700);
});
