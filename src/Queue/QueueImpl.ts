import { DllQueue } from "./DllQueue";

export const testQueue = () => {
  const newQ = new DllQueue();

  console.log(newQ.isEmpty());

  newQ.enqueue("a");
  newQ.enqueue("b");
  newQ.enqueue("c");

  console.log(newQ.peek());

  console.log(newQ.dequeue());

  console.log(newQ.peek());
};
