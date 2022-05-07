import {
  addDirectedEdge,
  createEmptyGraph,
} from "./../BfsAdjListIterative/Graph";
import { DjikStraAdjList } from "./DjikStraAdjList";
export const testDjikStra = () => {
  const graph = createEmptyGraph(5);

  addDirectedEdge(graph, 0, 1, 4);
  addDirectedEdge(graph, 0, 2, 1);
  addDirectedEdge(graph, 1, 3, 1);
  addDirectedEdge(graph, 2, 1, 2);
  addDirectedEdge(graph, 2, 3, 5);
  addDirectedEdge(graph, 3, 4, 3);

  const djik = new DjikStraAdjList(graph);
  djik.djikstra(0, 4);
};
