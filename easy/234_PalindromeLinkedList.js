// PROBLEM LINK:
// https://leetcode.com/problems/palindrome-linked-list/

// EXPLANANTION:
// https://www.youtube.com/watch?v=X2R2VZjKqi8

// STATEMENT
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// EXAMPLES
// Example 1:
// Input: head = [1, 2, 2, 1];
// Output: true;

// Example 2:
// Input: head = [1, 2];
// Output: false;

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const reverse = head => {
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

const isPalindrome = head => {
	let fast = head;
	let slow = head;
	let startPointer = head;
	let length = 0;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
		length++;
	}

	let mid = reverse(slow);

	while (length--) {
		if (mid.val !== startPointer.val) return false;
		startPointer = startPointer.next;
		mid = mid.next;
	}

	return true;
};
