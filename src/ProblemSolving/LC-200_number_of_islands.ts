export const testNumberOfIslands = () => {
  console.log("test number of islands");

  const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];

  const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];

  const grid3 = [
    ["0", "0", "1", "0", "0"],
    ["0", "1", "0", "1", "0"],
    ["0", "1", "1", "1", "1"],
    ["0", "0", "0", "1", "0"],
  ];

  const grid4 = [
    ["0", "0", "1"],
    ["0", "1", "0"],
    ["0", "1", "1"],
    ["1", "0", "0"],
  ];

  const grid5 = [["1", "0", "1"]];

  const grid6 = [
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "0", "1"],
  ];

  const grid7 = [
    ["1", "1", "1"],
    ["0", "0", "1"],
    ["1", "1", "1"],
    ["1", "0", "0"],
    ["1", "1", "1"],
  ];

  function numIslands(grid: string[][]): number {
    const rootValues = new Map<string, string>();

    const reconcile = (oldValue: string, newValue: string) => {
      rootValues.forEach((value, key) => {
        if (value === oldValue) {
          rootValues.set(key, newValue);
        }
      });
    };

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === "1") {
          const up = rootValues.has(JSON.stringify({ i: i - 1, j }))
            ? rootValues.get(JSON.stringify({ i: i - 1, j }))
            : null;
          const left = rootValues.has(JSON.stringify({ i, j: j - 1 }))
            ? rootValues.get(JSON.stringify({ i, j: j - 1 }))
            : null;

          const current = JSON.stringify({ i, j });

          //both left and up present
          if (left && up) {
            if (left === up) {
              rootValues.set(current, up);
            } else {
              // for now choose one and reconcile another
              rootValues.set(current, left);
              reconcile(up, left);
            }
          } else if (left || up) {
            //if either left or up is present
            if (up) {
              rootValues.set(current, up);
            } else {
              rootValues.set(current, left!);
            }
          } else {
            //if neither is present
            rootValues.set(current, current);
          }
        }
      }
    }

    const values = Array.from(rootValues.values());

    const unique = [...new Set(values)].length;

    return unique;
  }

  //console.log(grid1);
  console.log(numIslands(grid7));
  //console.log(grid1);
};
