import {
  addUnweightedUndirectedEdge,
  createEmptyGraph,
} from "./BfsAdjListIterative";

export const testBfsAdjList = () => {
  console.log("test bfs");

  const graph = createEmptyGraph(13);
  addUnweightedUndirectedEdge(graph, 0, 7);
  console.log(graph);
};
