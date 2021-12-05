const gamma = (readings, minimum) =>
  parseInt(readings.map(reading => (reading > minimum ? 1 : 0)).join(''), 2);

const epsilon = (readings, minimum) =>
  parseInt(readings.map(reading => (reading > minimum ? 0 : 1)).join(''), 2);

const oxygen = (position, rates, readings, minimum) =>
  rates.filter(rate =>
    readings[position] >= minimum
      ? rate[position] === '1'
      : rate[position] === '0'
  );

const co2 = (position, rates, readings, minimum) =>
  rates.filter(rate =>
    readings[position] >= minimum
      ? rate[position] === '0'
      : rate[position] === '1'
  );

const getReadings = rates =>
  rates.reduce(
    (acc, rate) =>
      rate
        .split('')
        .map((measurement, index) => (acc[index] || 0) + parseInt(measurement)),
    []
  );

const reduceConvertedRates = (rates, stat, position = 0) => {
  const minimum = Math.ceil(rates.length / 2);
  const readings = getReadings(rates);
  return rates.length === 1
    ? parseInt(rates[0], 2)
    : reduceConvertedRates(
        stat(position, rates, readings, minimum),
        stat,
        position + 1
      );
};

export default rates => {
  const minimum = rates.length / 2;
  const readings = getReadings(rates);
  const gammaRate = gamma(readings, minimum);
  const epsilonRate = epsilon(readings, minimum);
  const oxygenRate = reduceConvertedRates(rates, oxygen);
  const co2Rate = reduceConvertedRates(rates, co2);
  return { gammaRate, epsilonRate, oxygenRate, co2Rate };
};
