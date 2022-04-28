export class Edge {
  private from: number;
  private to: number;
  private cost: number;

  constructor($from: number, $to: number, $cost: number) {
    this.from = $from;
    this.to = $to;
    this.cost = $cost;
  }

  public get $from(): number {
    return this.from;
  }

  public get $to(): number {
    return this.to;
  }

  public get $cost(): number {
    return this.cost;
  }

  public set $from(value: number) {
    this.from = value;
  }

  public set $to(value: number) {
    this.to = value;
  }

  /**
   * Setter $cost
   * @param {number} value
   */
  public set $cost(value: number) {
    this.cost = value;
  }
}

export const createEmptyGraph = (n: number): Edge[][] => {
  const graph: Edge[][] = new Array(n);

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  return graph;
};

export const addDirectedEdge = (
  graph: Edge[][],
  from: number,
  to: number,
  cost: number
) => {
  graph[from].push(new Edge(from, to, cost));
};

export const addUndirectedEdge = (
  graph: Edge[][],
  from: number,
  to: number,
  cost: number
) => {
  addDirectedEdge(graph, from, to, cost);
  addDirectedEdge(graph, to, from, cost);
};

export const addUnweightedUndirectedEdge = (
  graph: Edge[][],
  from: number,
  to: number
) => {
  addUndirectedEdge(graph, from, to, 1);
};
