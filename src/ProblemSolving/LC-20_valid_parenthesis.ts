export const testValidParenthesis = () => {
  console.log("test");

  const s = "()";
  const s1 = "()[]{}";
  const s3 = ")";

  function isValid(s: string): boolean {
    const objMap: any = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
      if (
        objMap[s[i]] === undefined ||
        !(objMap[s[i]] === stack[stack.length - 1])
      ) {
        stack.push(s[i]);
      } else {
        stack.pop();
      }
    }

    //console.log(stack);

    return stack.length === 0;
  }

  console.log(isValid(s3));
};
