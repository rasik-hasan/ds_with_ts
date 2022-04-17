import { BST } from "./BST";
export const testBST = () => {
  const BSTDS = new BST();

  BSTDS.add(6);
  BSTDS.add(2);
  BSTDS.add(3);
  BSTDS.add(1);
  BSTDS.add(9);
  BSTDS.add(4);
  BSTDS.add(8);
  BSTDS.add(12);
  BSTDS.add(11);
  BSTDS.add(10);
  BSTDS.add(15);
  BSTDS.add(14);
  BSTDS.add(17);

  BSTDS.printPreOrderTraversal(BSTDS.root);

  console.log("BSTDS size:", BSTDS.size());
  console.log(BSTDS.remove(1)); //leaf node
  console.log(BSTDS.remove(3)); //has 1 right child
  console.log(BSTDS.add(3)); //becomes left child of 4
  console.log(BSTDS.remove(4)); // has 1 left child
  console.log(BSTDS.remove(12)); // has both left and right st
  console.log(BSTDS.remove(15)); // has both left and right st
  console.log(BSTDS.remove(75));
  BSTDS.printPreOrderTraversal(BSTDS.root);
};
