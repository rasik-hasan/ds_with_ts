export const testHeaters = () => {
  console.log("test heaters");

  const house1 = [1, 2, 3],
    heaters1 = [2];

  const house2 = [1, 2, 3, 4],
    heaters2 = [1, 4];

  const house3 = [1, 5],
    heaters3 = [2];

  function findRadius(houses: number[], heaters: number[]): number {
    const distances: number[] = [];

    for (let i = 0; i < houses.length; i++) {
      let min = null;
      for (let j = 0; j < heaters.length; j++) {
        const distance = Math.abs(houses[i] - heaters[j]);

        if (min === null) {
          min = distance;
        } else {
          min = Math.min(min, distance);
        }
      }

      if (min !== null) {
        distances.push(min);
      }
    }

    return Math.max(...distances);
  }

  console.log(findRadius(house1, heaters1));
};
