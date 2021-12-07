const decodeLines = lines =>
  lines.map(line => {
    const [__match, x1, y1, x2, y2] = line.match(
      /(\d+),(\d+)\s->\s(\d+),(\d+)/
    );
    return {
      x1: parseInt(x1),
      y1: parseInt(y1),
      x2: parseInt(x2),
      y2: parseInt(y2),
    };
  });

const update = (seaFloor, x, y) =>
  (seaFloor[`${y}.${x}`] = (seaFloor[`${y}.${x}`] || 0) + 1);

export default (lines, includeHorizontal) => {
  const decodedLines = decodeLines(lines);
  const seaFloor = {};
  for (const { x1, x2, y1, y2 } of decodedLines) {
    if (x1 == x2) {
      if (y1 > y2) {
        for (let n = 0; y1 - n >= y2; n++) {
          update(seaFloor, x1, y1 - n);
        }
      }
      if (y1 < y2) {
        for (let n = 0; y1 + n <= y2; n++) {
          update(seaFloor, x1, y1 + n);
        }
      }
    }
    if (y1 == y2) {
      if (x1 > x2) {
        for (let n = 0; x1 - n >= x2; n++) {
          update(seaFloor, x1 - n, y1);
        }
      }
      if (x1 < x2) {
        for (let n = 0; x1 + n <= x2; n++) {
          update(seaFloor, x1 + n, y1);
        }
      }
    }
    if (includeHorizontal) {
      if (x1 > x2 && y1 > y2) {
        for (let n = 0; x1 - n >= x2; n++) {
          update(seaFloor, x1 - n, y1 - n);
        }
      }
      if (x1 > x2 && y1 < y2) {
        for (let n = 0; x1 - n >= x2; n++) {
          update(seaFloor, x1 - n, y1 + n);
        }
      }
      if (x1 < x2 && y1 > y2) {
        for (let n = 0; x1 + n <= x2; n++) {
          update(seaFloor, x1 + n, y1 - n);
        }
      }
      if (x1 < x2 && y1 < y2) {
        for (let n = 0; x1 + n <= x2; n++) {
          update(seaFloor, x1 + n, y1 + n);
        }
      }
    }
  }
  return Object.values(seaFloor).reduce(
    (acc, hits) => (hits > 1 ? acc + 1 : acc),
    0
  );
};
