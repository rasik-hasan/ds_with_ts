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
  //newPQ.add(5);
  //newPQ.add(6);
  //console.log(newPQ.size());

  // console.log(newPQ.peek());

  // console.log(newPQ.toString());

  //console.log(newPQ.pop());

  // console.log(newPQ.toString(), newPQ.size());

  console.log(newPQ.toString(), newPQ.size());
};
