import { getInput } from '../../utils';
import decodePattern from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day8/input');
  expect(decodePattern(input)).toEqual(245);
});
