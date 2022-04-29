import { BFSAdjListItr } from "./BfsAdjListIterative";
import { addUnweightedUndirectedEdge, createEmptyGraph } from "./Graph";

export const testBfsAdjList = () => {
  console.log("test bfs");

  const graph = createEmptyGraph(13);
  addUnweightedUndirectedEdge(graph, 0, 7);
  addUnweightedUndirectedEdge(graph, 0, 9);
  addUnweightedUndirectedEdge(graph, 0, 11);
  addUnweightedUndirectedEdge(graph, 7, 11);
  addUnweightedUndirectedEdge(graph, 7, 6);
  addUnweightedUndirectedEdge(graph, 7, 3);
  addUnweightedUndirectedEdge(graph, 6, 5);
  addUnweightedUndirectedEdge(graph, 3, 4);
  addUnweightedUndirectedEdge(graph, 2, 3);
  addUnweightedUndirectedEdge(graph, 2, 12);
  addUnweightedUndirectedEdge(graph, 12, 8);
  addUnweightedUndirectedEdge(graph, 8, 1);
  addUnweightedUndirectedEdge(graph, 1, 10);
  addUnweightedUndirectedEdge(graph, 10, 9);
  addUnweightedUndirectedEdge(graph, 9, 8);
  console.log(graph);

  const bfsClass = new BFSAdjListItr(graph);

  console.log(bfsClass.bfs_with_prev(0));
  bfsClass.bfs_fcc(0);
};
