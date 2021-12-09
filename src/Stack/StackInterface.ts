export interface StackI<T> {
  push(item: T): void;
  pop(): T;
  peek(): T;
  search(item: T): number;
  size(): number;
  isEmpty(): boolean;
}
