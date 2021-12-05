import { getInput } from '../../utils';
import powerConsumptionRate from '..';

test(`--- Part One ---`, () => {
  const input = getInput('../day3/input');
  const { gammaRate, epsilonRate } = powerConsumptionRate(input);
  expect(gammaRate * epsilonRate).toEqual(2498354);
});
