export const gasStation = () => {
  console.log("gasstations");

  const gas1 = [1, 2, 3, 4, 5],
    cost1 = [3, 4, 5, 1, 2];

  const gas2 = [2, 3, 4],
    cost2 = [3, 4, 3];

  const gas3 = [3, 1, 1],
    cost3 = [1, 2, 2];

  function canCompleteCircuit(gas: number[], cost: number[]): number {
    const tank: number[] = [];
    let i = 0;
    let reminder = 0;
    let positives = 0;
    let result = -1;
    const limit = gas.length * 2 - 1;

    while (i < limit) {
      let idx = i;
      if (i > gas.length - 1) {
        idx = i - gas.length;
      }
      tank[idx] = reminder + gas[idx] - cost[idx];

      if (tank[idx] < 0) {
        positives = 0;
        reminder = 0;
      } else {
        reminder = tank[idx];
        positives++;
      }

      if (positives === gas.length) {
        result = idx + 1;
        if (result > gas.length - 1) {
          result = gas.length - result;
        }
        break;
      }
      //console.log(tank[idx]);
      i++;
    }

    return result;
  }

  //console.log(canCompleteCircuit(gas1, cost1));
  console.log(canCompleteCircuit(gas3, cost3));
};
