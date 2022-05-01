export const testStringCompare = () => {
  console.log("test string compare");

  const s1 = "ab#c",
    t1 = "ad#c";

  const s2 = "ab##",
    t2 = "c#d#";

  const s3 = "a#c",
    t3 = "b";

  const s4: string = "#",
    t4: string = "";

  function backspaceCompare(s: string, t: string): boolean {
    const s1Stack: string[] = [];
    const s2Stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "#") {
        s1Stack.pop();
      } else {
        s1Stack.push(s[i]);
      }
    }

    for (let i = 0; i < t.length; i++) {
      if (t[i] === "#") {
        s2Stack.pop();
      } else {
        s2Stack.push(t[i]);
      }
    }

    console.log(s1Stack, s2Stack);

    if (s1Stack.length !== s2Stack.length) {
      return false;
    }

    for (let i = 0; i < s1Stack.length; i++) {
      if (s1Stack[i] !== s2Stack[i]) {
        return false;
      }
    }

    return true;
  }

  console.log(backspaceCompare(s4, t4));
};
