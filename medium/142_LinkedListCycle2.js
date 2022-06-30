// PROBLEM LINK:
// https://leetcode.com/problems/linked-list-cycle-ii/

// STATEMENT
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// EXAMPLES
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1

// Example 2:
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0

// Example 3:
// Input: head = [1], pos = -1
// Output: no cycle

// Constraints:
// Do not modify the linked list.

const detectCycle = head => {
	if (!head || !head.next) return null;

	let slow = head;
	let fast = head;

	let current = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;

		if (slow === fast) break;
	}

	if (slow !== fast) return null;

	while (current !== slow) {
		current = current.next;
		slow = slow.next;
	}

	return slow;
};
