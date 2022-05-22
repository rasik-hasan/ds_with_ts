export const testFloodFill = () => {
  console.log("test flood fill");

  const image1 = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    sr1 = 1,
    sc1 = 1,
    newColor1 = 2;

  const image2 = [
      [0, 0, 0],
      [0, 0, 0],
    ],
    sr2 = 0,
    sc2 = 0,
    newColor2 = 2;

  const image3 = [
      [0, 0, 0],
      [0, 1, 1],
    ],
    sr3 = 1,
    sc3 = 1,
    newColor3 = 1;

  function floodFill(
    image: number[][],
    sr: number,
    sc: number,
    newColor: number
  ): number[][] {
    const numberToChange = image[sr][sc];
    const upGrid = [-1, 0];
    const leftGrid = [0, -1];
    const downGrid = [1, 0];
    const rightGrid = [0, 1];

    const queue: [number, number][] = [];
    const visited: [number, number][] = [];

    queue.push([sr, sc]);
    visited.push([sr, sc]);

    const checkIfVisited = (node: [number, number]) => {
      let isVisited = false;

      visited.forEach((item) => {
        if (item[0] === node[0] && item[1] === node[1]) {
          isVisited = true;
        }
      });

      return isVisited;
    };

    while (queue.length !== 0) {
      const curr = queue.shift();
      image[curr![0]][curr![1]] = newColor;

      const upCurr: [number, number] = [
        curr![0] + upGrid[0],
        curr![1] + upGrid[1],
      ];
      if (
        image[upCurr[0]] !== undefined &&
        image[upCurr[0]][upCurr[1]] !== undefined &&
        image[upCurr[0]][upCurr[1]] === numberToChange
      ) {
        if (!checkIfVisited(upCurr)) {
          queue.push(upCurr);
          visited.push(upCurr);
        }
      }

      const leftCurr: [number, number] = [
        curr![0] + leftGrid[0],
        curr![1] + leftGrid[1],
      ];
      if (
        image[leftCurr[0]] !== undefined &&
        image[leftCurr[0]][leftCurr[1]] !== undefined &&
        image[leftCurr[0]][leftCurr[1]] === numberToChange
      ) {
        if (!checkIfVisited(leftCurr)) {
          queue.push(leftCurr);
          visited.push(leftCurr);
        }
      }

      const downCurr: [number, number] = [
        curr![0] + downGrid[0],
        curr![1] + downGrid[1],
      ];
      if (
        image[downCurr[0]] !== undefined &&
        image[downCurr[0]][downCurr[1]] !== undefined &&
        image[downCurr[0]][downCurr[1]] === numberToChange
      ) {
        if (!checkIfVisited(downCurr)) {
          queue.push(downCurr);
          visited.push(downCurr);
        }
      }

      const rightCurr: [number, number] = [
        curr![0] + rightGrid[0],
        curr![1] + rightGrid[1],
      ];
      if (
        image[rightCurr[0]] !== undefined &&
        image[rightCurr[0]][rightCurr[1]] !== undefined &&
        image[rightCurr[0]][rightCurr[1]] === numberToChange
      ) {
        if (!checkIfVisited(rightCurr)) {
          queue.push(rightCurr);
          visited.push(rightCurr);
        }
      }
    }

    return image;
  }

  console.log(floodFill(image1, sr1, sc1, newColor1));
  console.log(floodFill(image2, sr2, sc2, newColor2));
  console.log(floodFill(image3, sr3, sc3, newColor3));
};
