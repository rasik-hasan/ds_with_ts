export interface BSTNode<T> {
  data: T;
  leftChild: BSTNode<T> | null;
  rightChild: BSTNode<T> | null;
}

export interface BSTTree<T> {
  isEmpty(): boolean;
  size(): number;
  add(item: T): boolean;
  add(node: BSTNode<T>, item: T): BSTNode<T>;
  remove(item: T): boolean;
  height(): number;
  contains(item: T): boolean;
  printPreOrderTraversal(): void;
  printPostOrderTraversal(): void;
  printInorderTraversal(): void;
  printLevelOrderTraversal(): void;

  //private methods

  findMin(node: BSTNode<T>): BSTNode<T>; //find smallest leftmost node
  findMax(node: BSTNode<T>): BSTNode<T>; //find largest rightmost node
  contains(node: BSTNode<T>, item: T): boolean;
  remove(node: BSTNode<T>, item: T): BSTNode<T>;
  height(node: BSTNode<T>): number;
}
