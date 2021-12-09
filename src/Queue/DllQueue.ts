import { DoubleLinkedList } from "../DoubleLinkedList/DoubleLinkedList";
import { QueueI } from "./QueueInterface";

export class DllQueue<T> implements QueueI<T> {
  private doubleLinkedList: DoubleLinkedList<T>;

  constructor() {
    this.doubleLinkedList = new DoubleLinkedList();
  }

  enqueue(item: T): void {
    this.doubleLinkedList.addLast(item);
  }
  dequeue(): T {
    return this.doubleLinkedList.removeFirst();
  }
  peek(): T {
    return this.doubleLinkedList.peekFirst();
  }
  search(item: T): number {
    return this.doubleLinkedList.indexOf(item);
  }
  size(): number {
    return this.doubleLinkedList.size();
  }
  isEmpty(): boolean {
    return this.doubleLinkedList.isEmpty();
  }
}
