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
    const removeItem = this.heap[0];

    this.heap[0] = this.heap[this.heapSize - 1];
    this.heap.pop(); //remove the last item of the array.
    this.heapSize--;

    this.sink(0);

    return removeItem;
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
    let removeIndex = this.heap.findIndex((elem) => elem === item);

    if (removeIndex === -1) {
      return false;
    }

    this.swap(removeIndex, this.heapSize - 1);
    this.heapSize--;
    this.sink(removeIndex);
    return true;
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
    let currentNodeIndex = k;
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
    let currentIndex = k;
    let leftChild = 2 * currentIndex + 1;
    let rightChild = 2 * currentIndex + 2;

    while (leftChild <= this.heapSize - 1) {
      let smallerChildIndex = leftChild;

      if (this.heap[rightChild])
        smallerChildIndex =
          this.heap[leftChild] <= this.heap[rightChild]
            ? leftChild
            : rightChild;
      //console.log(smallerChildIndex);

      if (this.less(this.heap[smallerChildIndex], this.heap[currentIndex])) {
        this.swap(smallerChildIndex, currentIndex);
        currentIndex = smallerChildIndex;
        leftChild = 2 * currentIndex + 1;
        rightChild = 2 * currentIndex + 2;
      } else {
        return;
      }
    }
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
