const fuelCalc = (crab, alignment, exp) => {
  const steps = Math.abs(crab - alignment);
  return exp ? (steps * (steps + 1)) / 2 : steps;
};

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
