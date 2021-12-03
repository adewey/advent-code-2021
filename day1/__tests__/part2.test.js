import { getInput } from '../../utils';
import depthIncreases from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day1/input');
  expect(depthIncreases(input, 3)).toEqual(1065);
});
