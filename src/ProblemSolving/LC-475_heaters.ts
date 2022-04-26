export const testHeaters = () => {
  console.log("test heaters");

  const house1 = [1, 2, 3],
    heaters1 = [2];

  const house2 = [1, 2, 3, 4],
    heaters2 = [1, 4];

  const house3 = [1, 5],
    heaters3 = [2];

  function findRadius(houses: number[], heaters: number[]): number {
    const distances: { [key: string]: number[] } = {};

    for (let i = 0; i < houses.length; i++) {
      distances[houses[i]] = [];
      for (let j = 0; j < heaters.length; j++) {
        distances[houses[i]].push(Math.abs(houses[i] - heaters[j]));
      }
    }

    const distancesMin = [];

    for (let i = 0; i < houses.length; i++) {
      distancesMin.push(Math.min(...distances[houses[i]]));
    }

    return Math.max(...distancesMin);
  }

  console.log(findRadius(house3, heaters3));
};
