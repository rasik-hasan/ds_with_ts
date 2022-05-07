import { Edge } from "../BfsAdjListIterative/Graph";
import Heap from "heap";

// export class Node {
//   private id: number;
//   private value: number;

//   constructor(id: number, value: number) {
//     this.id = id;
//     this.value = value;
//   }

//   public get $id(): number {
//     return this.id;
//   }

//   public get $value(): number {
//     return this.value;
//   }

//   public set $id(value: number) {
//     this.id = value;
//   }

//   public set $value(value: number) {
//     this.value = value;
//   }
// }

export interface Node {
  id: number;
  value: number;
}

export class DjikStraAdjList {
  private dist: number[];
  private graph: Edge[][];

  constructor(graph: Edge[][]) {
    this.graph = graph;
    this.dist = [];
  }

  /**
   * Reconstructs the shortest path (of nodes) from 'start' to 'end' inclusive.
   *
   * @return An array of nodes indexes of the shortest path from 'start' to 'end'. If 'start' and
   *     'end' are not connected then an empty array is returned.
   */
  reconstructPath(start: number, end: number): number[] {
    return [];
  }

  // Run Dijkstra's algorithm on a directed graph to find the shortest path
  // from a starting node to an ending node. If there is no path between the
  // starting node and the destination node the returned value is set to be
  // Double.POSITIVE_INFINITY.
  djikstra(start: number, end: number): number {
    this.dist = new Array(this.graph.length).fill(null);
    this.dist[start] = 0;
    const pQueue = new Heap<Node>((a, b) => {
      return a.value - b.value;
    });

    //console.log(this.graph);

    pQueue.push({ id: start, value: 0 });
    //console.log(pQueue);

    while (!pQueue.empty()) {
      const current = pQueue.pop();
      const neighbours = this.graph[current?.id!];
      //console.log(neighbours);

      for (let i = 0; i < neighbours.length; i++) {
        const currentNeighbour = neighbours[i];
        const distance = this.dist[current?.id!] + currentNeighbour.$cost;
        //console.log(distance);

        if (this.dist[currentNeighbour.$to] === null) {
          this.dist[currentNeighbour.$to] = distance;
        } else {
          this.dist[currentNeighbour.$to] = Math.min(
            this.dist[currentNeighbour.$to],
            distance
          );
        }

        pQueue.push({
          id: currentNeighbour.$to,
          value: this.dist[currentNeighbour.$to],
        });
      }
    }

    console.log(this.dist);

    return this.dist[end];
  }
}
