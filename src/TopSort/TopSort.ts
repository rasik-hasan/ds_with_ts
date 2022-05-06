import { Edge } from "./../BfsAdjListIterative/Graph";
export class TopSort {
  private graph: Edge[][];
  private visited: number[];
  private ordering: number[];

  constructor(graph: Edge[][]) {
    this.graph = graph;
    this.visited = [];
    this.ordering = [];
  }

  // Helper method that performs a depth first search on the graph to give
  // us the topological ordering we want. Instead of maintaining a stack
  // of the nodes we see we simply place them inside the ordering array
  // in reverse order for simplicity.
  private dfs(start: number): number {
    const neighbours = this.graph[start];

    for (let i = 0; i < neighbours.length; i++) {
      const currentN = neighbours[i];
      if (!this.visited.includes(currentN.$to)) {
        this.visited.push(currentN.$to);
        const returned = this.dfs(currentN.$to);
        this.ordering.push(returned);
      }
    }

    return start;
  }

  // Finds a topological ordering of the nodes in a Directed Acyclic Graph (DAG)
  // The input to this function is an adjacency list for a graph and the number
  // of nodes in the graph.
  //
  // NOTE: 'numNodes' is not necessarily the number of nodes currently present
  // in the adjacency list since you can have singleton nodes with no edges which
  // wouldn't be present in the adjacency list but are still part of the graph!
  topologicalSort(numNodes: number): number[] {
    this.ordering = [];
    this.visited = [];

    for (let i = 0; i < this.graph.length; i++) {
      if (!this.visited.includes(i)) {
        this.visited.push(i);
        this.dfs(i);
        this.ordering.push(i);
      }
    }

    return this.ordering.reverse();
  }

  // A useful application of the topological sort is to find the shortest path
  // between two nodes in a Directed Acyclic Graph (DAG). Given an adjacency list
  // this method finds the shortest path to all nodes starting at 'start'
  //
  // NOTE: 'numNodes' is not necessarily the number of nodes currently present
  // in the adjacency list since you can have singleton nodes with no edges which
  // wouldn't be present in the adjacency list but are still part of the graph!
  dagShortestPath(start: number, numNodes: number): number[] {
    const topSortVal = this.topologicalSort(numNodes);
    const dist: number[] = new Array(numNodes).fill(null);

    dist[start] = 0;
    //console.log(dist);

    for (let i = 0; i < numNodes; i++) {
      const nodeIndex = topSortVal[i];

      if (dist[nodeIndex] !== null) {
        const neighbours = this.graph[nodeIndex];

        if (neighbours !== null) {
          for (let j = 0; j < neighbours.length; j++) {
            const newDist = dist[nodeIndex] + neighbours[j].$cost;

            if (dist[neighbours[j].$to] === null) {
              dist[neighbours[j].$to] = newDist;
            } else {
              dist[neighbours[j].$to] = Math.min(
                dist[neighbours[j].$to],
                newDist
              );
            }
          }
        }
      }
    }

    return dist;
  }
}
