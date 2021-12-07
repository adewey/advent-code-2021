import { getInput } from '../../utils';
import simulateLanternfish from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day6/input');
  expect(simulateLanternfish(input, 256)).toEqual(1600306001288);
});
