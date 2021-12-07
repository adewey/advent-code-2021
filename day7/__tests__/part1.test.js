import { getInput } from '../../utils';
import alignCrabs from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day7/input');
  expect(alignCrabs(input)).toEqual(355764);
});
