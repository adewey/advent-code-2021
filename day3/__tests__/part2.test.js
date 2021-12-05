import { getInput } from '../../utils';
import powerConsumptionRate from '..';

test(`--- Part Two ---`, () => {
  const input = getInput('../day3/input');
  const { oxygenRate, co2Rate } = powerConsumptionRate(input);
  expect(oxygenRate * co2Rate).toEqual(3277956);
});
