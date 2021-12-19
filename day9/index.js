const generateHeatmap = heatmapInput =>
  heatmapInput.reduce(
    (acc, line) => [...acc, line.split('').map(point => parseInt(point))],
    []
  );

const slopeCheck = (heatmap, x, y, depth) => {
  if (heatmap[x] === undefined) return 9 > depth;
  if (heatmap[x][y] === undefined) return 9 > depth;
  return heatmap[x][y] > depth;
};

const findLowPoints = heatmap => {
  const lowPoints = {};
  for (let x = 0; ; x++) {
    const outer = heatmap[x];
    if (outer === undefined) break;
    for (let y = 0; ; y++) {
      const depth = outer[y];
      if (depth === undefined) break;
      if (
        slopeCheck(heatmap, x + 1, y, depth) &&
        slopeCheck(heatmap, x - 1, y, depth) &&
        slopeCheck(heatmap, x, y + 1, depth) &&
        slopeCheck(heatmap, x, y - 1, depth)
      ) {
        lowPoints[`${x}.${y}`] = depth;
      }
    }
  }
  return lowPoints;
};

const findBasinSize = (heatmap, x, y, depth, basin) => {
  if (basin[`${x}.${y}`] || depth === undefined || depth == 9) return basin;
  basin[`${x}.${y}`] = depth;
  findBasinSize(heatmap, x + 1, y, heatmap[x + 1]?.[y], basin);
  findBasinSize(heatmap, x - 1, y, heatmap[x - 1]?.[y], basin);
  findBasinSize(heatmap, x, y + 1, heatmap[x]?.[y + 1], basin);
  findBasinSize(heatmap, x, y - 1, heatmap[x]?.[y - 1], basin);
  return basin;
};

const findBasins = (heatmap, lowPoints) => {
  const basins = [];
  for (const [lowPoint, depth] of Object.entries(lowPoints)) {
    const [x, y] = lowPoint.split('.');
    basins.push(findBasinSize(heatmap, parseInt(x), parseInt(y), depth, {}));
  }
  return basins;
};

const calculateRisk = lowPoints =>
  Object.values(lowPoints).reduce((acc, point) => acc + point + 1, 0);

const calculateBasins = basins =>
  basins
    .map(basin => Object.keys(basin).length)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, size) => size * acc, 1);

export default (heatmapInput, includeBasins) => {
  const heatmap = generateHeatmap(heatmapInput);
  const lowPoints = findLowPoints(heatmap);
  const basins = findBasins(heatmap, lowPoints);
  return includeBasins ? calculateBasins(basins) : calculateRisk(lowPoints);
};
