export default (depths, window = 1) =>
  depths.reduce(
    ({ prev, count }, __depth, index, arr) => {
      const totals = arr
        .slice(index, index + window)
        .reduce((acc, depth) => acc + parseInt(depth), 0);
      return {
        count: totals > prev ? count + 1 : count,
        prev: totals,
      };
    },
    { count: 0 }
  ).count;
