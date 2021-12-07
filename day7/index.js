const expSteps = steps => {
  let total = 0;
  for (let n = 0; n < steps; n++) {
    total += steps - n;
  }
  return total;
};

const fuelCalc = (crab, alignment, exp) =>
  exp ? expSteps(Math.abs(crab - alignment)) : Math.abs(crab - alignment);

const alignCrabs = (crabList, alignment, exp) =>
  crabList.reduce((fuel, crab) => fuel + fuelCalc(crab, alignment, exp), 0);

export default (crabInput, alignment, exp) => {
  const { min, max, crabList } = crabInput[0].split(',').reduce(
    ({ crabList, min, max }, crab) => ({
      crabList: [...crabList, parseInt(crab)],
      min: parseInt(crab) < min ? parseInt(crab) : min,
      max: parseInt(crab) > max ? parseInt(crab) : max,
    }),
    { crabList: [], min: 1000000, max: 0 }
  );
  if (alignment) return alignCrabs(crabList, alignment, exp);
  let best = 10000000000000;
  for (let n = min; n < max; n++) {
    const cur = alignCrabs(crabList, n, exp);
    if (cur < best) {
      best = cur;
    }
  }
  return best;
};
