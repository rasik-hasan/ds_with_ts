import { PQBH } from "./PQBinaryHeap";

export const testPQBH = () => {
  const newPQ = new PQBH();

  //console.log(newPQ.isEmpty());

  newPQ.add(3);
  newPQ.add(4);
  newPQ.add(7);
  newPQ.add(8);
  newPQ.add(1);
  newPQ.add(2);
  newPQ.add(10);
  newPQ.add(0);

  console.log(newPQ.peek());

  console.log(newPQ.toString());
};
