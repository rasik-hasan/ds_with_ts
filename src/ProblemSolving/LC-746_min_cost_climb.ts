export const testMinCostClimb = () => {
  console.log("test min cost climb");
  const cost1 = [10, 15, 20]; //15
  const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]; //6

  function minCostClimbingStairs(cost: number[]): number {
    if (cost.length === 0) {
      return 0;
    }

    //for 1 step
    const residue1 = cost.shift() ?? 0;
    //console.log("residue1:", residue1, cost);
    const result1 = residue1 + minCostClimbingStairs([...cost]);

    //for 2 step

    const residue2 = cost.shift() ?? 0;
    //console.log("residue2:", residue2, cost);
    const result2 = residue2 + minCostClimbingStairs([...cost]);

    return Math.min(result1, result2);
  }

  console.log(minCostClimbingStairs(cost1));
  console.log(minCostClimbingStairs(cost2));
};
