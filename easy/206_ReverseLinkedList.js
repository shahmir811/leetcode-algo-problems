// PROBLEM LINK:
// https://leetcode.com/problems/reverse-linked-list/

// EXPLANANTION:
// https://www.youtube.com/watch?v=DT3KOnLWR_o

// STATEMENT
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// EXAMPLES
// Example 1:
// Input: head = [1, 2, 3, 4, 5];
// Output: [5, 4, 3, 2, 1];

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const reverseList = head => {
	if (!head || !head.next) return head;

	let first = head;
	let tail = head;
	let second = first.next;

	while (second) {
		const temp = second.next;
		second.next = first;
		first = second;
		second = temp;
	}

	head.next = null;
	head = first;
	return head;
};
