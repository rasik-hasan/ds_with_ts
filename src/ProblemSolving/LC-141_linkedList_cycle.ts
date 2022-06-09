export const testLinkedListCycle = () => {
  console.log("test ll cycle");

  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  const input1B: ListNode = {
    val: 2,
    next: {
      val: 0,
      next: {
        val: 4,
        next: null,
      },
    },
  };

  const input1 = {
    val: 3,
    next: input1B,
  };

  input1B.next!.next!.next = input1B;

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

  function hasCycle(head: ListNode | null): boolean {
    let slowPointer = head;
    let fastPointer = head?.next?.next;

    while (slowPointer !== fastPointer && head !== null) {
      slowPointer = slowPointer?.next?.next ?? null;
      fastPointer = fastPointer?.next?.next?.next?.next ?? null;
      head = head.next;
    }

    //console.log(slowPointer, fastPointer, head);

    return !(head === null || slowPointer === null || fastPointer === null);
  }
  console.log(hasCycle(input1));
};
