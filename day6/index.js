export default (initialSchool, days = 80) => {
  let lanternFish = initialSchool[0].split(',').reduce(
    (acc, fish) => ({
      ...acc,
      [parseInt(fish)]: acc[parseInt(fish)] + 1,
    }),
    { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }
  );
  for (let n = 0; n < days; n++) {
    const newFish = lanternFish[0];
    lanternFish[0] = lanternFish[1];
    lanternFish[1] = lanternFish[2];
    lanternFish[2] = lanternFish[3];
    lanternFish[3] = lanternFish[4];
    lanternFish[4] = lanternFish[5];
    lanternFish[5] = lanternFish[6];
    lanternFish[6] = lanternFish[7] + newFish;
    lanternFish[7] = lanternFish[8];
    lanternFish[8] = newFish;
  }
  return Object.values(lanternFish).reduce((acc, fish) => acc + fish, 0);
};
