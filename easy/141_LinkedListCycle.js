// PROBLEM LINK:
// https://leetcode.com/problems/linked-list-cycle/description/

// STATEMENT
// Return true if there is a cycle in the linked list. Otherwise, return false.

// EXAMPLES
// Example 1:
// Input: (head = [3, 2, 0, -4]), (pos = 1);
// Output: true;

const hasCycle = head => {
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;

		if (slow === fast) return true;
	}

	return false;
};
