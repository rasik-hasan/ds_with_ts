import { NewDS } from "../DynamicArray/DynamicArray";

interface SingleLinkedListI<T> extends NewDS<T> {
  addLast(elem: T): void;
  addFirst(elem: T): void;
  peekFirst(): T;
  peekLast(): T;
  removeFirst(): T;
  removeLast(): T;
  removeValue(): boolean;
}

class SllNode<T> {
  private data: T;
  private next: SllNode<T> | null;

  constructor(data: T, next: SllNode<T> | null) {
    this.data = data;
    this.next = next;
  }

  public getData(): T {
    return this.data;
  }

  public getNext(): SllNode<T> | null {
    return this.next;
  }

  public setData(value: T) {
    this.data = value;
  }

  public setNext(value: SllNode<T> | null) {
    this.next = value;
  }
}

export class SllLinkedList<T> implements SingleLinkedListI<T> {
  private llSize: number = 0;
  private head: SllNode<T> | null = null;
  private tail: SllNode<T> | null = null;

  addLast(elem: T): void {
    if (this.isEmpty()) {
      const newNode: SllNode<T> = new SllNode<T>(elem, null);
      this.head = this.tail = newNode;
    } else {
      const newNode: SllNode<T> = new SllNode<T>(elem, null);
      this.tail?.setNext(newNode);
      this.tail = newNode;
    }

    this.llSize++;
  }
  addFirst(elem: T): void {
    if (this.isEmpty()) {
      const newNode: SllNode<T> = new SllNode<T>(elem, null);
      this.head = this.tail = newNode;
    } else {
      const newNode: SllNode<T> = new SllNode<T>(elem, this.head);
      this.head = newNode;
    }

    this.llSize++;
  }
  peekFirst(): T {
    return this.head!.getData();
  }
  peekLast(): T {
    return this.tail!.getData();
  }
  removeFirst(): T {
    if (this.llSize === 0) {
      throw new Error("no data");
    }
    const firstData = this.head;

    this.head = this.head!.getNext();

    this.llSize--;

    return firstData!.getData();
  }
  removeLast(): T {
    if (this.llSize === 0) {
      throw new Error("no data");
    }

    const removeData = this.tail!.getData();

    let tmpHead = this.head;
    let lastNode: SllNode<T> | null = null;

    while (tmpHead !== null) {
      if (tmpHead === this.tail) {
        lastNode!.setNext(null);
        this.tail = lastNode;
        this.llSize--;
        return removeData;
      }
      lastNode = tmpHead;
      tmpHead = tmpHead.getNext();
    }

    return removeData;
  }
  removeValue(): boolean {
    throw new Error("Method not implemented.");
  }
  size(): number {
    return this.llSize;
  }
  isEmpty(): boolean {
    return this.llSize > 0 ? false : true;
  }
  getAt(index: number): T {
    if (index > this.llSize - 1) {
      throw new Error("index out of bounds");
    }

    let counter = 0;
    let tmpHead = this.head;

    while (tmpHead !== null) {
      if (counter === index) {
        return tmpHead.getData();
      }

      counter++;
      tmpHead = tmpHead.getNext();
    }

    throw new Error("not found");
  }
  setAt(index: number, elem: T): void {
    if (index > this.llSize - 1) {
      throw new Error("index out of bounds");
    }

    let counter = 0;
    let tmpHead = this.head;

    while (tmpHead !== null) {
      if (counter === index) {
        tmpHead.setData(elem);
      }

      counter++;
      tmpHead = tmpHead.getNext();
    }
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  add(elem: T): void {
    this.addLast(elem);
  }
  removeAt(rm_index: number): T {
    if (rm_index > this.llSize - 1) {
      throw new Error("index out of bounds");
    } else if (rm_index === 0) {
      return this.removeFirst();
    } else if (rm_index === this.llSize - 1) {
      console.log("last");
      return this.removeLast();
    } else {
      let counter = 0;
      let tmpHead = this.head;
      let lastNode: SllNode<T> | null = null;

      while (tmpHead !== null) {
        if (counter === rm_index) {
          const deletedNodeData = tmpHead.getData();
          lastNode!.setNext(tmpHead.getNext());
          this.llSize--;
          return deletedNodeData;
        }

        lastNode = tmpHead;

        counter++;
        tmpHead = tmpHead.getNext();
      }
    }

    throw new Error("unable to remove");
  }
  remove(item: T): boolean {
    if (this.llSize === 0) {
      throw new Error("index out of bounds");
    } else if (item === this.head!.getData()) {
      this.removeFirst();
      return true;
    } else if (item === this.tail!.getData()) {
      this.removeLast();
      return true;
    } else {
      let tmpHead = this.head;
      let lastNode: SllNode<T> | null = null;

      while (tmpHead !== null) {
        if (item === tmpHead.getData()) {
          lastNode!.setNext(tmpHead.getNext());
          this.llSize--;
          return true;
        }
        lastNode = tmpHead;
        tmpHead = tmpHead.getNext();
      }
    }

    return false;
  }
  indexOf(item: T): number {
    let tmpHead = this.head;
    let counter = 0;

    while (tmpHead !== null) {
      if (item === tmpHead.getData()) {
        return counter;
      }
      counter++;
      tmpHead = tmpHead.getNext();
    }

    return -1;
  }
  contains(item: T): boolean {
    let tmpHead = this.head;
    let counter = 0;

    while (tmpHead !== null) {
      if (item === tmpHead.getData()) {
        return true;
      }
      counter++;
      tmpHead = tmpHead.getNext();
    }

    return false;
  }
  toString(): string {
    const stringArray = [];

    let tmpHead = this.head;
    while (tmpHead !== null) {
      stringArray.push(tmpHead.getData());
      tmpHead = tmpHead.getNext();
    }

    return stringArray.join(",");
  }
  printAll(): void {
    let tmpHead = this.head;
    while (tmpHead !== null) {
      console.log(tmpHead.getData(), ",");
      tmpHead = tmpHead.getNext();
    }
  }
  originalSize(): number {
    throw new Error("Method not implemented.");
  }
}

// const newSllLinkedList = new SllLinkedList();

// console.log(newSllLinkedList.isEmpty(), newSllLinkedList.size());

// newSllLinkedList.addFirst("a");

// console.log(newSllLinkedList.isEmpty(), newSllLinkedList.size());

// newSllLinkedList.addFirst("b");

// newSllLinkedList.addLast("c");

// console.log(newSllLinkedList.toString());
// console.log(newSllLinkedList.getAt(2));

// newSllLinkedList.setAt(1, "d");
// console.log(newSllLinkedList.toString());

// console.log(newSllLinkedList.removeFirst(), newSllLinkedList.size());
// console.log(newSllLinkedList.toString());

// newSllLinkedList.add("e");
// newSllLinkedList.add("f");
// newSllLinkedList.add("g");

// console.log(newSllLinkedList.toString());
// console.log(newSllLinkedList.removeAt(2));
// console.log(newSllLinkedList.toString(), newSllLinkedList.size());

// console.log(newSllLinkedList.remove("c"));
// console.log(newSllLinkedList.toString(), newSllLinkedList.size());

// console.log(newSllLinkedList.contains("f"));
// console.log(newSllLinkedList.indexOf("q"));
