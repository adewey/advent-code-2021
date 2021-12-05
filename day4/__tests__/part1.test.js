import { getInput } from '../../utils';
import calculateBingo from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day4/input');
  expect(calculateBingo(input)).toEqual(2496);
});
