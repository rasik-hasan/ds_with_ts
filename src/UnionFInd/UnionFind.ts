class UnionFind {
  //number of elements in this union find
  private size: number;

  // used to track the size of each groups
  private eachGroupSize: number[];

  // id[i] points to the parent of i, if id[i] = i, then i is a root node
  // basically we modify or calculate this array
  private id: number[];

  //tracks the number of groups in the union Find
  private numOfGroups: number;

  constructor(size: number) {
    if (size <= 0) throw new Error("size cannot be less than 0");

    this.size = size;

    this.id = new Array<number>(size);
    this.eachGroupSize = new Array<number>(size);

    //because initially, all items are it's own group,
    //it will decrease everytime unify is called.
    this.numOfGroups = size;

    //initialize all elements to itself, id[i] = i
    for (let i = 0; i < size; i++) {
      this.id[i] = i;
      this.eachGroupSize[i] = 1;
    }
  }

  //find the root of the element
  public find(p: number): number {
    let temp = p;

    while (this.id[p] != p) {
      p = this.id[p];
    }

    //now p has the root

    //pointing all the items to the root for optimization
    while (this.id[temp] != temp) {
      const parent = this.id[temp];
      this.id[temp] = p;
      temp = parent;
    }

    return p;
  }

  //return if p,q are in the same group
  private connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }

  //return number of elements in this unionFind
  private getSize(): number {
    return this.size;
  }

  private getNumberOfGroups(): number {
    return this.numOfGroups;
  }

  public unify(p: number, q: number) {}
}
