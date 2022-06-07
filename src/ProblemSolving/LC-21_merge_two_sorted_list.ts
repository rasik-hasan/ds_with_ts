const util = require("util");

export const testMergeTwoSortedList = () => {
  console.log("test");

  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  const list1A: ListNode = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null,
      },
    },
  };

  const list1B: ListNode = {
    val: 1,
    next: {
      val: 3,
      next: { val: 4, next: null },
    },
  };

  const list2A: ListNode = {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  };

  const list3B: ListNode = {
    val: 0,
    next: null,
  };

  const list2B: ListNode = {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null,
      },
    },
  };

  function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
  ): ListNode | null {
    //to do
  }

  console.log(
    util.inspect(
      mergeTwoLists(null, list3B),
      false,
      null,
      true /* enable colors */
    )
  );
};
