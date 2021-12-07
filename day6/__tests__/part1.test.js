import { getInput } from '../../utils';
import simulateLanternfish from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day6/input');
  expect(simulateLanternfish(input)).toEqual(352195);
});
