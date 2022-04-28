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

  bfs(start: number) {}
}
