import { getInput } from '../../utils';
import riskLevels from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day9/input');
  expect(riskLevels(input)).toEqual(575);
});
