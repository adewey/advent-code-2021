import { getInput } from '../../utils';
import commandSubmarine from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day2/input');
  expect(commandSubmarine(input, true)).toEqual(2134882034);
});
