export const test_intersection_linked_lists = () => {
  console.log("test intersection linked lists");

  interface ListNode {
    val: number;
    next: ListNode | null;
  }

  const intersectingPoint: ListNode = {
    val: 8,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null,
      },
    },
  };

  const inputA1: ListNode = {
    val: 4,
    next: {
      val: 1,
      next: intersectingPoint,
    },
  };

  const inputB1: ListNode = {
    val: 5,
    next: {
      val: 6,
      next: {
        val: 1,
        next: intersectingPoint,
      },
    },
  };

  const inputA2: ListNode = {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 4,
        next: null,
      },
    },
  };

  const inputB2: ListNode = {
    val: 1,
    next: {
      val: 5,
      next: null,
    },
  };

  const input3_intersection: ListNode = {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  };

  const inputA3: ListNode = {
    val: 1,
    next: {
      val: 9,
      next: {
        val: 1,
        next: input3_intersection,
      },
    },
  };

  const inputB3: ListNode = {
    val: 3,
    next: input3_intersection,
  };

  function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null
  ): ListNode | null {
    let ptrHeadA = headA;
    let ptrHeadB = headB;

    while (ptrHeadA !== ptrHeadB) {
      if (ptrHeadA === null) {
        ptrHeadA = headB;
      } else {
        ptrHeadA = ptrHeadA!.next;
      }

      if (ptrHeadB === null) {
        ptrHeadB = headA;
      } else {
        ptrHeadB = ptrHeadB!.next;
      }
    }

    return ptrHeadA;
  }

  console.log(getIntersectionNode(inputA3, inputB3));
  //console.log(inputA1, inputB1);
};
