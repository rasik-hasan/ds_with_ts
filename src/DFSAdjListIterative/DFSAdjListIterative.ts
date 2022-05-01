import { Edge } from "../BfsAdjListIterative/Graph";

export class DFSAdjListIterative {
  //count the number of nodes in a graph
  dfs(graph: Edge[][], start: number): number {
    let numberOfNodes = 0;
    const visited = [];
    const stack = [];

    stack.push(start);
    visited.push(stack);

    while (stack.length !== 0) {
      const current = stack.pop();
      numberOfNodes++;
      const neighbours = graph[current!];

      for (let i = 0; i < neighbours.length; i++) {
        const currentNeighbour: Edge = neighbours[i];
        if (!visited.includes(currentNeighbour.$to)) {
          visited.push(currentNeighbour.$to);
          stack.push(currentNeighbour.$to);
        }
      }
    }

    return numberOfNodes;
  }
}
