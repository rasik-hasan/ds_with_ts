import { BSTI, BSTNode } from "./BinarySearchTreeInterface";

export class BST<T> implements BSTI<T> {
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
  add(item: T): boolean;
  add(node: BSTNode<T>, item: T): BSTNode<T>;
  add(node: any, item?: any): boolean | BSTNode<T> {
    throw new Error("Method not implemented.");
  }
  remove(item: T): boolean;
  remove(node: BSTNode<T>, item: T): BSTNode<T>;
  remove(node: any, item?: any): boolean | BSTNode<T> {
    throw new Error("Method not implemented.");
  }
  height(): number;
  height(node: BSTNode<T>): number;
  height(node?: any): number {
    throw new Error("Method not implemented.");
  }
  contains(item: T): boolean;
  contains(node: BSTNode<T>, item: T): boolean;
  contains(node: any, item?: any): boolean {
    throw new Error("Method not implemented.");
  }
  printPreOrderTraversal(): void {
    throw new Error("Method not implemented.");
  }
  printPostOrderTraversal(): void {
    throw new Error("Method not implemented.");
  }
  printInorderTraversal(): void {
    throw new Error("Method not implemented.");
  }
  printLevelOrderTraversal(): void {
    throw new Error("Method not implemented.");
  }
  findMin(node: BSTNode<T>): BSTNode<T> {
    throw new Error("Method not implemented.");
  }
  findMax(node: BSTNode<T>): BSTNode<T> {
    throw new Error("Method not implemented.");
  }
}
