import { getInput } from '../../utils';
import depthIncreases from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day1/input');
  expect(depthIncreases(input)).toEqual(1121);
});
