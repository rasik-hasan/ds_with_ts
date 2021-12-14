import { PQHeapI } from "./PQBinaryHeapInterface";

export class PQBH<T> implements PQHeapI<T> {
  private heapSize = 0;
  private heap: T[] = [];

  isEmpty(): boolean {
    if (this.heapSize === 0) {
      return true;
    }
    return false;
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  size(): number {
    return this.heapSize;
  }
  peek(): T {
    if (this.heapSize === 0) {
      throw new Error("Heap is empty");
    }
    return this.heap[0];
  }
  pop(): T {
    throw new Error("Method not implemented.");
  }
  contains(item: T): boolean {
    this.heap.forEach((heapItem) => {
      if (heapItem === item) {
        return true;
      }
    });
    return false;
  }
  add(item: T): void {
    this.heap.push(item);
    this.heapSize++;
    this.swim(this.heapSize - 1);
  }
  remove(item: T): boolean {
    throw new Error("Method not implemented.");
  }
  removeAt(index: number): boolean {
    throw new Error("Method not implemented.");
  }
  isMinHeap(k: number): boolean {
    throw new Error("Method not implemented.");
  }
  less(item1: T, item2: T): boolean {
    if (item1 < item2) {
      return true;
    }
    return false;
  }
  swim(k: number): void {
    let currentNodeIndex = k; //4
    let parentNodeIndex = Math.floor((k - 1) / 2);

    while (parentNodeIndex >= 0) {
      if (this.less(this.heap[currentNodeIndex], this.heap[parentNodeIndex])) {
        this.swap(currentNodeIndex, parentNodeIndex);
        currentNodeIndex = parentNodeIndex;
        parentNodeIndex = Math.floor((currentNodeIndex - 1) / 2);
      } else {
        break;
      }
    }
  }
  sink(k: number): void {
    throw new Error("Method not implemented.");
  }
  swap(index1: number, index2: number): void {
    let tmpValue = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = tmpValue;
  }
  toString(): string {
    return this.heap.join(",");
  }
}
