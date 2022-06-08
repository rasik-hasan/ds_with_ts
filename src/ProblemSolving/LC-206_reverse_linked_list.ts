const util = require("util");

export const reverseLinkedList = () => {
  console.log("reverse linked list");

  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  const input1: ListNode = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  };

  const input2: ListNode = {
    val: 1,
    next: null,
  };

  const input3: ListNode = {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  };

  function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
      return head;
    }

    const stack = [];
    let llItr = head;

    while (llItr !== null) {
      stack.push(llItr);
      llItr = llItr.next!;
    }

    let first = stack.pop();
    let newHead = first!;
    let second: any;

    while (stack.length !== 0) {
      second = stack.pop();

      first!.next = second!;
      first = second;
    }
    second!.next = null;

    return newHead;
  }

  //console.log(reverseList(input1));

  console.log(util.inspect(reverseList(input3), false, null, true));
};
