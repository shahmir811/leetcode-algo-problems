// PROBLEM LINK:
// https://leetcode.com/problems/middle-of-the-linked-list/

// EXPLANANTION:
// https://www.youtube.com/watch?v=t97D5FbGnao

// STATEMENT
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// EXAMPLES
// Example 1:
// Input: head = [1, 2, 3, 4, 5];
// Output: [3, 4, 5];

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const middleNode = head => {
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
	}

	return slow;
};
