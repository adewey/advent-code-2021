import { getInput } from '../../utils';
import commandSubmarine from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day2/input');
  expect(commandSubmarine(input)).toEqual(2272262);
});
