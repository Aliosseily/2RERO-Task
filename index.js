const sum = (a) => a.reduce((r, x) => r + x);
let prevSum = 0;

const roadsAndLibraries = (n_cities, c_lib, c_road, cities) => {
  cities.sort(function (a, b) {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  });

  const roadsToBeRepaired = [];
  for (let i = 0; i < cities.length; i++) {
    if (i === 0 || sum(cities[i]) >= prevSum + 2) {
      prevSum = sum(cities[i]);
      roadsToBeRepaired.push(cities[i]);
    }
  }

  const roadsToBeRepairedCost = roadsToBeRepaired.length * c_road;

  let numberOflibrariesToBuild = roadsToBeRepaired.length - 1;
  if (roadsToBeRepaired.length === 1) {
    numberOflibrariesToBuild = 1;
  }

  const librariesToBeBuildCost = numberOflibrariesToBuild * c_lib;

  const librariesToBeBuildInEveryCityCost = n_cities * c_lib;

  const totalRoadsAndLibaraiesCost = roadsToBeRepairedCost + librariesToBeBuildCost;

  if (totalRoadsAndLibaraiesCost < librariesToBeBuildInEveryCityCost) {
    return totalRoadsAndLibaraiesCost;
  } else {
    return librariesToBeBuildInEveryCityCost;
  }
};
 console.log(roadsAndLibraries(3, 2, 1, [[1, 2],[2, 3],[3, 1]]));

// console.log(roadsAndLibraries(6, 2, 6, [[1, 3],[3, 4],[2, 4],[1, 2],[2, 3],[5, 6]]));
// console.log(roadsAndLibraries(6, 3, 2, [[1, 7],[1, 3],[1, 2],[2, 3],[5, 6],[6, 8]]));
// console.log(roadsAndLibraries(6, 3, 2, [[1, 7],[5, 6],[6, 8]]));
// console.log(roadsAndLibraries(3, 2, 1, [[1, 2]]));
