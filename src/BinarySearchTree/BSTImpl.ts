import { BST } from "./BST";
export const testBST = () => {
  const BSTDS = new BST();

  BSTDS.add(6);
  BSTDS.add(2);
  BSTDS.add(3);
  BSTDS.add(1);
  BSTDS.add(9);
  BSTDS.add(4);
  BSTDS.add(10);
  BSTDS.add(8);
  BSTDS.add(12);
  BSTDS.add(11);
  BSTDS.add(15);
  BSTDS.add(14);
  BSTDS.add(17);

  // console.log("bst size: ", BSTDS.size());
  BSTDS.printPreOrderTraversal(BSTDS.root);
  //console.log(BSTDS.isEmpty());

  // console.log(BSTDS.contains(10));

  // console.log("BSTDS size:", BSTDS.size());
  // console.log(BSTDS.remove(4));
  console.log("BSTDS size:", BSTDS.size());
  console.log(BSTDS.remove(3));
  console.log("BSTDS size:", BSTDS.size());
  console.log(BSTDS.remove(12));
  console.log("BSTDS size:", BSTDS.size());

  BSTDS.printPreOrderTraversal(BSTDS.root);
};
