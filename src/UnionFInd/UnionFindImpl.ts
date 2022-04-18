import { UnionFind } from "./UnionFind";

export const testUnionFind = () => {
  console.log("test union find");

  const newUnionFind = new UnionFind(10);

  newUnionFind.printDetails();

  newUnionFind.unify(0, 9);
  newUnionFind.unify(9, 5);
  newUnionFind.unify(2, 4);
  newUnionFind.unify(6, 8);
  newUnionFind.unify(7, 8);
  newUnionFind.unify(0, 8);
  console.log(newUnionFind.find(7));
  newUnionFind.unify(7, 4);
  newUnionFind.unify(1, 3);
  newUnionFind.unify(1, 0);
  newUnionFind.unify(0, 3);
  console.log(newUnionFind.find(3));
  console.log(newUnionFind.getGroupSize(0));

  newUnionFind.printDetails();
};
