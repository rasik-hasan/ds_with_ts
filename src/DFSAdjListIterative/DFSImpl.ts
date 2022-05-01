import {
  addDirectedEdge,
  createEmptyGraph,
} from "./../BfsAdjListIterative/Graph";
import { DFSAdjListIterative } from "./DFSAdjListIterative";
export const testDFS = () => {
  console.log("test dfs");

  // Create a fully connected graph
  //           (0)
  //           / \
  //        5 /   \ 4
  //         /     \
  // 10     <   -2  >
  //   +->(2)<------(1)      (4)
  //   +--- \       /
  //         \     /
  //        1 \   / 6
  //           > <
  //           (3)
  const numNodes = 5;

  const graph = createEmptyGraph(numNodes);
  addDirectedEdge(graph, 0, 1, 4);
  addDirectedEdge(graph, 0, 2, 5);
  addDirectedEdge(graph, 1, 2, -2);
  addDirectedEdge(graph, 1, 3, 6);
  addDirectedEdge(graph, 2, 3, 1);
  addDirectedEdge(graph, 2, 2, 10); // Self loop

  console.log(graph);

  const dfsClass = new DFSAdjListIterative();

  console.log(dfsClass.dfs(graph, 0));
};
