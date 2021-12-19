import { getInput } from '../../utils';
import navigationScore from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day10/input');
  expect(navigationScore(input, true)).toEqual(3999363569);
});
