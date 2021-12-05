import { getInput } from '../../utils';
import calculateBingo from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day4/input');
  expect(calculateBingo(input, true)).toEqual(25925);
});
