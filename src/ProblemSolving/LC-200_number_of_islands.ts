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
    interface tuples {
      i: number;
      j: number;
    }

    const rootValues = new Map<string, tuples>();

    const reconcile = (oldValue: tuples, newValue: tuples) => {
      rootValues.forEach((value, key) => {
        if (value.i === oldValue.i && value.j === oldValue.j) {
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
            if (left.i === up.i && left.j === up.j) {
              rootValues.set(current, { i: up.i, j: up.j });
            } else {
              // for now choose one and reconcile another
              rootValues.set(current, up);
              reconcile(left, up);
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
            rootValues.set(current, { i, j });
          }
        }
      }
    }

    const values = Array.from(rootValues.values());

    const valuesStrings = values.map((item) => {
      return JSON.stringify(item);
    });

    function onlyUnique(value: any, index: any, self: any) {
      return self.indexOf(value) === index;
    }

    const unique = valuesStrings.filter(onlyUnique).length;

    return unique;
  }

  //console.log(grid1);
  console.log(numIslands(grid7));
  //console.log(grid1);
};
