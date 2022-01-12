export interface BSTNodeI<T> {
  data: T;
  leftChild: BSTNodeI<T> | null;
  rightChild: BSTNodeI<T> | null;
}

export interface BSTI<T> {
  isEmpty(): boolean;
  size(): number;
  add(item: T): boolean;
  add(node: BSTNodeI<T>, item: T): BSTNodeI<T>;
  remove(item: T): boolean;
  height(): number;
  contains(item: T): boolean;
  printPreOrderTraversal(): void;
  printPostOrderTraversal(): void;
  printInorderTraversal(): void;
  printLevelOrderTraversal(): void;

  //private methods

  findMin(node: BSTNodeI<T>): BSTNodeI<T>; //find smallest leftmost node
  findMax(node: BSTNodeI<T>): BSTNodeI<T>; //find largest rightmost node
  contains(node: BSTNodeI<T>, item: T): boolean;
  remove(node: BSTNodeI<T>, item: T): BSTNodeI<T>;
  height(node: BSTNodeI<T>): number;
}
