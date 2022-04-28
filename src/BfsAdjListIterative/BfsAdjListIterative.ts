import { Edge } from "./Graph";

export class BFSAdjListItr {
  private graphSize: number;
  private prev: number[];
  private graph: Edge[][];

  constructor($graph: Edge[][]) {
    this.graphSize = $graph.length;
    this.prev = [];
    this.graph = $graph;
  }

  reconstructPath(start: number, end: number): number[] {
    return [];
  }

  bfs_calculate_distance(start: number): {} {
    this.prev = [];
    const queue = [];
    const visited: number[] = [];
    const distanceMap: any = {};

    for (let i = 0; i < this.graphSize; i++) {
      distanceMap[i] = "infinity";
    }

    distanceMap[start] = 0;
    queue.push(start);

    while (queue.length !== 0) {
      const current = queue.shift();
      visited.push(current!);

      //console.log("current", current, visited, queue);

      const neighbours = this.graph[current!];

      for (let i = 0; i < neighbours.length; i++) {
        const currentNeighbour: number = neighbours[i].$to;
        const currentNeighbourCost: number = neighbours[i].$cost;
        if (
          !visited.includes(currentNeighbour) &&
          !queue.includes(currentNeighbour)
        ) {
          queue.push(currentNeighbour);
          distanceMap[currentNeighbour] =
            distanceMap[current!] + currentNeighbourCost;
        }
      }
    }

    return distanceMap;
  }
}
