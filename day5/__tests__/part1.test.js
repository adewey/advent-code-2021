import { getInput } from '../../utils';
import overlappingPoints from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day5/input');
  expect(overlappingPoints(input)).toEqual(4745);
});
