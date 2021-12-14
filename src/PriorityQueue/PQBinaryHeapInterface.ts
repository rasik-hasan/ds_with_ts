export interface PQHeapI<T> {
  isEmpty(): boolean;
  clear(): void;
  size(): number;
  peek(): T;
  pop(): T;
  contains(item: T): boolean;
  add(item: T): void;
  remove(item: T): boolean; //removes item
  removeAt(index: number): boolean;
  isMinHeap(k: number): boolean; //recursively checks if this is a min heap. Just for testing
  //the rest of these are private methods, but for now adding as public
  less(item1: T, item2: T): boolean; //compares if item1 <= item 2
  swim(k: number): void; // Perform bottom up node swim, O(log(n))
  sink(k: number): void; // Top down node sink, O(log(n))
  swap(item1: number, item2: number): void; // swaps item1 and item2
}
