export interface BSTNodeI<T> {
  data: T;
  leftChild: BSTNodeI<T> | null;
  rightChild: BSTNodeI<T> | null;
}

export interface BSTI<T> {
  isEmpty(): boolean;
  size(): number;
  add(item: T): boolean;
  remove(item: T): boolean;
  height(): number;
  contains(item: T): boolean;
  printPreOrderTraversal(head: BSTNodeI<T> | null): void;
  printPostOrderTraversal(head: BSTNodeI<T> | null): void;
  printInorderTraversal(head: BSTNodeI<T> | null): void;
  printLevelOrderTraversal(): void;

  //private methods
  addItem(node: BSTNodeI<T>, item: T): BSTNodeI<T> | null;
  findMin(node: BSTNodeI<T>): BSTNodeI<T>; //find smallest leftmost node
  findMax(node: BSTNodeI<T>): BSTNodeI<T>; //find largest rightmost node
  containsItem(node: BSTNodeI<T>, item: T): boolean;
  removeItem(node: BSTNodeI<T>, item: T): any;
  heightRecur(node: BSTNodeI<T>): number;
}
