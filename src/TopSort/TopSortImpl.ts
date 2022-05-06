import { TopSort } from "./TopSort";
import {
  addDirectedEdge,
  addUndirectedEdge,
  createEmptyGraph,
} from "../BfsAdjListIterative/Graph";

export const testTopSort = () => {
  console.log("top sort");

  const numNodes = 8;

  const graph = createEmptyGraph(numNodes);
  // addDirectedEdge(graph, 0, 1, 3);
  // addDirectedEdge(graph, 0, 2, 2);
  // addDirectedEdge(graph, 0, 5, 3);
  // addDirectedEdge(graph, 1, 3, 1);
  // addDirectedEdge(graph, 1, 2, 6);
  // addDirectedEdge(graph, 2, 3, 1);
  // addDirectedEdge(graph, 2, 4, 10);
  // addDirectedEdge(graph, 3, 4, 5);
  // addDirectedEdge(graph, 5, 4, 7);

  // addDirectedEdge(graph, 0, 1, 3);
  // addDirectedEdge(graph, 0, 6, 3);
  // addDirectedEdge(graph, 1, 4, 3);
  // addDirectedEdge(graph, 2, 6, 3);
  // addDirectedEdge(graph, 3, 2, 3);
  // addDirectedEdge(graph, 2, 6, 3);
  // addDirectedEdge(graph, 6, 5, 3);
  // addDirectedEdge(graph, 4, 5, 3);

  addDirectedEdge(graph, 0, 1, 3);
  addDirectedEdge(graph, 0, 2, 6);
  addDirectedEdge(graph, 1, 2, 4);
  addDirectedEdge(graph, 1, 3, 4);
  addDirectedEdge(graph, 1, 4, 11);
  addDirectedEdge(graph, 2, 3, 8);
  addDirectedEdge(graph, 2, 6, 11);
  addDirectedEdge(graph, 3, 4, -4);
  addDirectedEdge(graph, 3, 5, 5);
  addDirectedEdge(graph, 3, 6, 2);
  addDirectedEdge(graph, 4, 7, 9);
  addDirectedEdge(graph, 5, 7, 1);
  addDirectedEdge(graph, 6, 7, 2);

  console.log(graph);
  const topSort = new TopSort(graph);

  console.log(topSort.topologicalSort(numNodes));

  console.log(topSort.dagShortestPath(1, numNodes));
};
