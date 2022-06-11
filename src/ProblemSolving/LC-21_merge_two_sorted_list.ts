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
  }; //[1,2,4]

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

  const list4A: ListNode = {
    val: 5,
    next: {
      val: 6,
      next: null,
    },
  };

  const list4B: ListNode = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null,
      },
    },
  };

  function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
  ): ListNode | null {
    let listItr1, listItr2, returnHead;

    if (list1 === null || list2 === null) {
      return list1 || list2;
    }

    if (list1.val < list2.val) {
      listItr1 = list1;
      returnHead = list1;
      listItr2 = list2;
    } else {
      listItr1 = list2;
      returnHead = list2;
      listItr2 = list1;
    }

    while (listItr2 !== null) {
      if (listItr1.val === listItr2.val) {
        const tempNext = listItr1.next;
        const newNode: ListNode = new ListNode(listItr2.val, tempNext);
        listItr1.next = newNode;
        listItr1 = listItr1.next!;
        listItr2 = listItr2?.next;
      } else {
        if (listItr1.next && listItr1.next.val < listItr2.val) {
          listItr1 = listItr1.next;
        } else {
          const tempNext = listItr1.next;
          const newNode: ListNode = new ListNode(listItr2.val, tempNext);
          listItr1.next = newNode;
          listItr1 = listItr1.next!;
          listItr2 = listItr2?.next;
        }
      }
    }

    return returnHead;
  }

  console.log(
    util.inspect(
      mergeTwoLists(list4A, null),
      false,
      null,
      true /* enable colors */
    )
  );
};
