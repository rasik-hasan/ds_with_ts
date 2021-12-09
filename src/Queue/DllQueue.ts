import { DoubleLinkedList } from "../DoubleLinkedList/DoubleLinkedList";
import { QueueI } from "./QueueInterface";

export class DllQueue<T> implements QueueI<T> {
  enqueue(item: T): void {
    throw new Error("Method not implemented.");
  }
  dequeue(): T {
    throw new Error("Method not implemented.");
  }
  peek(): T {
    throw new Error("Method not implemented.");
  }
  search(item: T): number {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
}
