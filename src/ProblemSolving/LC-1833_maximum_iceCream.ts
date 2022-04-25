export const testMaxIceCream = () => {
  const costs1 = [1, 3, 2, 4, 1],
    coins1 = 7;

  const costs2 = [10, 6, 8, 7, 7, 8],
    coins2 = 5;

  const costs3 = [1, 6, 3, 1, 2, 5],
    coins3 = 20;

  const costs4 = [1, 1, 1, 1],
    coins4 = 10;

  function maxIceCream(costs: number[], coins: number): number {
    costs.sort((a, b) => a - b);

    let coinsLeft = coins;
    let i;
    let iceCreamCount = 0;

    for (i = 0; i < costs.length; i++) {
      if (costs[i] <= coinsLeft) {
        coinsLeft = coinsLeft - costs[i];
        iceCreamCount++;
      }
    }
    return iceCreamCount;
  }

  console.log(maxIceCream(costs4, coins4));
};
