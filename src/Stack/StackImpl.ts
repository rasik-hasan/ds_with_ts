import { SllStack } from "./SllStack";

export const testStack = () => {
  console.log("test stack");

  //stack with single linked list related tests
  const newStack = new SllStack();

  console.log(newStack.isEmpty());

  newStack.push("a");
  newStack.push("b");

  console.log(newStack.isEmpty());

  console.log(newStack.peek());

  console.log(newStack.pop());

  console.log(newStack.peek());

  newStack.push("c");
  newStack.push("d");
  newStack.push("e");

  console.log(newStack.peek());

  console.log(newStack.size());

  console.log(newStack.search("e"));
};
