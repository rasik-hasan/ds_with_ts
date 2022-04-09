export const testAssignCookies = () => {
  console.log("assign cookies");

  const g1 = [1, 2, 3],
    s1 = [1, 1];

  const g2 = [1, 2],
    s2 = [1, 2, 3];

  const g3 = [2, 3],
    s3 = [1, 1, 1, 1];

  function findContentChildren(g: number[], s: number[]): number {
    const totalChildren = g.length;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    const fccr = (g: number[], s: number[]): number => {
      if (g.length === 0 || s.length === 0) {
        return g.length;
      }

      if (s[0] >= g[0]) {
        s.shift();
        g.shift();
        return fccr(g, s);
      }

      s.shift();
      return fccr(g, s);
    };

    return totalChildren - fccr(g, s);
  }

  console.log(findContentChildren(g3, s3));
};
