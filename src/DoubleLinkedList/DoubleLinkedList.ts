import { NewDS } from "../DynamicArray/DynamicArray";

interface DoubleLinkedListI<T> extends NewDS<T> {
  addLast(elem: T): void;
  addFirst(elem: T): void;
  peekFirst(): T;
  peekLast(): T;
  removeFirst(): T;
  removeLast(): T;
  removeValue(): boolean;
}

class DllNode<T> {
  private next: DllNode<T> | null;
  private previous: DllNode<T> | null;
  private data: T;

  constructor(previous: DllNode<T> | null, data: T, next: DllNode<T> | null) {
    this.next = next;
    this.previous = previous;
    this.data = data;
  }

  public getNext(): DllNode<T> | null {
    return this.next;
  }

  public getPrevious(): DllNode<T> | null {
    return this.previous;
  }

  public getData(): T {
    return this.data;
  }

  public setNext(value: DllNode<T> | null) {
    this.next = value;
  }

  public setPrevious(value: DllNode<T> | null) {
    this.previous = value;
  }

  public setData(value: T) {
    this.data = value;
  }
}

export class DoubleLinkedList<T> implements DoubleLinkedListI<T> {
  private llSize: number = 0;
  private head: DllNode<T> | null = null;
  private tail: DllNode<T> | null = null;

  addLast(elem: T): void {
    if (this.isEmpty()) {
      this.head = this.tail = new DllNode<T>(null, elem, null);
    } else {
      const newTail: DllNode<T> = new DllNode<T>(
        this.tail,
        elem,
        this.tail!.getNext()
      );
      this.tail!.setNext(newTail);
      this.tail = newTail;
    }

    this.llSize++;
  }
  addFirst(elem: T): void {
    if (this.isEmpty()) {
      this.head = this.tail = new DllNode<T>(null, elem, null);
    } else {
      const newHead: DllNode<T> = new DllNode<T>(
        this.head!.getPrevious(),
        elem,
        this.head
      );

      this.head!.setPrevious(newHead);
      this.head = newHead;
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
    let tmpHead = this.head;
    tmpHead!.getNext()!.setPrevious(null);
    this.head = tmpHead!.getNext();
    this.llSize--;
    return tmpHead!.getData();
  }
  removeLast(): T {
    let tmpTail = this.tail;
    tmpTail!.getPrevious()!.setNext(null);
    this.tail = tmpTail!.getPrevious();
    this.llSize--;
    return tmpTail!.getData();
  }
  removeValue(): boolean {
    throw new Error("Method not implemented.");
  }
  size(): number {
    return this.llSize;
  }
  isEmpty(): boolean {
    return this.llSize === 0 ? true : false;
  }
  getAt(index: number): T {
    if (index + 1 > this.size()) {
      throw new Error("index out of bounds");
    } else {
      let tmpHead = this.head;
      let counter = 0;
      while (tmpHead !== null) {
        if (counter === index) {
          return tmpHead.getData();
        }
        tmpHead = tmpHead.getNext();
        counter++;
      }

      return tmpHead!.getData();
    }
  }
  setAt(index: number, elem: T): void {
    if (index + 1 > this.size()) {
      throw new Error("index out of bounds");
    } else {
      let tmpHead = this.head;
      let counter = 0;
      while (tmpHead !== null) {
        if (counter === index) {
          tmpHead.setData(elem);
          return;
        }
        tmpHead = tmpHead.getNext();
        counter++;
      }
    }
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  add(elem: T): void {
    this.addLast(elem);
  }

  //node removal
  removeAt(rm_index: number): T {
    let tmpHead = this.head;
    let counter = 0;

    while (tmpHead !== null) {
      if (counter === rm_index) {
        if (tmpHead === this.head) {
          return this.removeFirst();
        } else if (tmpHead === this.tail) {
          return this.removeLast();
        } else {
          tmpHead!.getNext()!.setPrevious(tmpHead.getPrevious());
          tmpHead!.getPrevious()!.setNext(tmpHead.getNext());
        }

        this.llSize--;
        return tmpHead.getData();
      }
      tmpHead = tmpHead.getNext();
      counter++;
    }
    throw new Error("Array out of bounds");
  }

  //nodeRemoval
  remove(item: T): boolean {
    let tmpHead = this.head;

    while (tmpHead !== null) {
      if (tmpHead.getData() === item) {
        if (tmpHead === this.head) {
          this.removeFirst();
        } else if (tmpHead === this.tail) {
          this.removeLast();
        } else {
          tmpHead!.getNext()!.setPrevious(tmpHead.getPrevious());
          tmpHead!.getPrevious()!.setNext(tmpHead.getNext());
        }

        this.llSize--;
        return true;
      }
      tmpHead = tmpHead.getNext();
    }
    return false;
  }
  indexOf(item: T): number {
    let tmpHead = this.head;
    let counter = 0;
    while (tmpHead !== null) {
      if (tmpHead.getData() === item) {
        return counter;
      }
      tmpHead = tmpHead.getNext();
      counter++;
    }

    return -1;
  }
  contains(item: T): boolean {
    let tmpHead = this.head;
    while (tmpHead !== null) {
      if (tmpHead.getData() === item) {
        return true;
      }
      tmpHead = tmpHead.getNext();
    }

    return false;
  }
  toString(): string {
    const storingArray = [];
    let tmpHead = this.head;
    while (tmpHead !== null) {
      storingArray.push(tmpHead.getData());
      tmpHead = tmpHead.getNext();
    }
    return storingArray.join("<->");
  }
  printAll(): void {
    let tmpHead = this.head;
    while (tmpHead !== null) {
      console.log(tmpHead.getData());
      tmpHead = tmpHead.getNext();
    }
  }
  originalSize(): number {
    return this.llSize;
  }
}

const newDoubleLinkedList = new DoubleLinkedList<string>();

console.log(newDoubleLinkedList.size());

newDoubleLinkedList.addLast("a");

console.log(newDoubleLinkedList.size());
console.log(newDoubleLinkedList.peekFirst());

newDoubleLinkedList.addFirst("b");
console.log(newDoubleLinkedList.size());
console.log(newDoubleLinkedList.peekFirst());
console.log(newDoubleLinkedList.peekLast());

newDoubleLinkedList.printAll();

console.log(newDoubleLinkedList.getAt(1));
newDoubleLinkedList.setAt(1, "d");

newDoubleLinkedList.add("c");
newDoubleLinkedList.printAll();

console.log(newDoubleLinkedList.indexOf("c"));
console.log(newDoubleLinkedList.contains("b"));

console.log(newDoubleLinkedList.toString());

console.log(newDoubleLinkedList.removeFirst());
console.log(newDoubleLinkedList.toString(), newDoubleLinkedList.size());
console.log(newDoubleLinkedList.removeLast());
console.log(newDoubleLinkedList.toString(), newDoubleLinkedList.size());

newDoubleLinkedList.add("q");
newDoubleLinkedList.add("w");
newDoubleLinkedList.add("e");
console.log(newDoubleLinkedList.toString(), newDoubleLinkedList.size());

newDoubleLinkedList.remove("w");
console.log(newDoubleLinkedList.toString(), newDoubleLinkedList.size());

newDoubleLinkedList.removeAt(1);
console.log(newDoubleLinkedList.toString(), newDoubleLinkedList.size());
