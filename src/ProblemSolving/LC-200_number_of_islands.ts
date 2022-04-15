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

  const grid5 = [["1", "1", "1"]];

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
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === "1") {
          const up = i > 0 ? grid[i - 1][j] : null;
          const left = j > 0 ? grid[i][j - 1] : null;

          //console.log(up, left);

          if (up === "2" || left === "2") {
            grid[i][j] = "2";

            if (up === "1") {
              grid[i - 1][j] = "2";
            }

            if (left === "1") {
              grid[i][j - 1] = "2";
            }
          } else if (up === "1" || left === "1") {
            grid[i][j] = "2";
          }
        }
      }
    }

    let numberOfIslands = 0;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === "1") {
          numberOfIslands++;
        }
      }
    }

    console.log(grid);

    return numberOfIslands;
  }

  //console.log(grid1);
  console.log(numIslands(grid7));
  //console.log(grid1);
};
