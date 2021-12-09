import { SllLinkedList } from "../SingleLinkedList/SingleLinkedList";
import { StackI } from "./StackInterface";

export class SllStack<T> implements StackI<T> {
  private singleLinkedList: SllLinkedList<T>;

  constructor() {
    this.singleLinkedList = new SllLinkedList();
  }

  push(item: T): void {
    this.singleLinkedList.addLast(item);
  }
  pop(): T {
    return this.singleLinkedList.removeLast();
  }
  peek(): T {
    return this.singleLinkedList.peekLast();
  }
  search(item: T): number {
    return this.singleLinkedList.indexOf(item);
  }
  size(): number {
    return this.singleLinkedList.size();
  }
  isEmpty(): boolean {
    return this.singleLinkedList.isEmpty();
  }
}
