// PROBLEM LINK:
// https://leetcode.com/problems/merge-two-sorted-lists/description/

// STATEMENT
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first
// two lists.
// Return the head of the merged linked list.

// EXAMPLES
// Example 1:
// Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
// Output: [1, 1, 2, 3, 4, 4];

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

const mergeTwoLists = (list1, list2) => {
	let head = new ListNode();
	let now = head;
	let p1 = list1;
	let p2 = list2;

	while (p1 || p2) {
		if (p1 === null || (p2 !== null && p2.val <= p1.val)) {
			now.next = p2;
			p2 = p2.next;
		} else {
			now.next = p1;
			p1 = p1.next;
		}

		now = now.next;
	}

	return head.next;
};
