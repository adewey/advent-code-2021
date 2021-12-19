import { getInput } from '../../utils';
import navigationScore from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day10/input');
  expect(navigationScore(input)).toEqual(369105);
});
