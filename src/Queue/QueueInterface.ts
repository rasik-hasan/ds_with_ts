export interface QueueI<T> {
  enqueue(item: T): void;
  dequeue(): T;
  peek(): T;
  search(item: T): number;
  size(): number;
  isEmpty(): boolean;
}
