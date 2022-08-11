// PROBLEM LINK:
// https://leetcode.com/problems/remove-linked-list-elements/

// EXPLANANTION:
// https://www.youtube.com/watch?v=hSY49AuyQ2A

// STATEMENT
// Given the head of a linked list and an integer val, remove all the nodes of the linked list
// that has Node.val == val, and return the new head.

// EXAMPLES
// Example 1:
// Input: (head = [1, 2, 6, 3, 4, 5, 6]), (val = 6);
// Output: [1, 2, 3, 4, 5];

// Example 2:
// Input: (head = []), (val = 1);
// Output: [];

// Example 3:
// Input: (head = [7, 7, 7, 7]), (val = 7);
// Output: [];

// Following code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const removeElements = (head, val) => {
	let dummy = new ListNode(-1);
	dummy.next = head;

	let prev = dummy;
	let current = head;

	while (current) {
		if (current.val === val) {
			prev.next = current.next;
			current = current.next;
		} else {
			prev = current;
			current = current.next;
		}
	}

	return dummy.next;
};
