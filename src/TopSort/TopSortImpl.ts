import {
  addDirectedEdge,
  addUndirectedEdge,
  createEmptyGraph,
} from "../BfsAdjListIterative/Graph";

export const testTopSort = () => {
  console.log("top sort");

  const graph = createEmptyGraph(7);
  addDirectedEdge(graph, 0, 1, 3);
  addDirectedEdge(graph, 0, 2, 2);
  addDirectedEdge(graph, 0, 5, 3);
  addDirectedEdge(graph, 1, 3, 1);
  addDirectedEdge(graph, 1, 2, 6);
  addDirectedEdge(graph, 2, 3, 1);
  addDirectedEdge(graph, 2, 4, 10);
  addDirectedEdge(graph, 3, 4, 5);
  addDirectedEdge(graph, 5, 4, 7);

  console.log(graph);
};
