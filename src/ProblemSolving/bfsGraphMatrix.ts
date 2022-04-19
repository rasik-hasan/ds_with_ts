export const testBFS = () => {
  console.log("test bfs");

  const input = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ];

  //console.log(input);

  //find the distance from each node to the root node.

  const BFS = (graph: number[][], root: number): {} => {
    const distanceMap: any = {};
    const visited = [];
    const queue = [];

    for (let i = 0; i < graph[0].length; i++) {
      distanceMap[i] = "infinity";
    }

    console.log(distanceMap);

    distanceMap[root] = 0;
    queue.push(root);

    console.log(queue);

    while (queue.length !== 0) {
      const current = queue.shift();
      console.log(current);
      visited.push(current);
      const neighbours = graph[current!];
      let startIndex = 0;

      while (startIndex !== -1) {
        startIndex = neighbours.indexOf(1, startIndex);
        //console.log(startIndex);
        if (startIndex !== -1) {
          if (!visited.includes(startIndex)) {
            queue.push(startIndex);
            distanceMap[startIndex] = distanceMap[current!] + 1;
          }

          startIndex += 1;
        }
      }
    }

    return distanceMap;
  };

  console.log(BFS(input, 1));
};
