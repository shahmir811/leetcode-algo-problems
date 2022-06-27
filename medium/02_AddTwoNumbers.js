// Problem link:
// https://leetcode.com/problems/add-two-numbers/

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse
// order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
	let result = new ListNode(0); // creating a new linked list with 0 as an initial value
	let currentNode = result;
	let carryOver = 0;

	while (l1 !== null || l2 !== null) {
		let v1 = 0;
		let v2 = 0;

		// Only update v1 or v2, if we gave l1 and l2 respectively
		if (l1 != null) v1 = l1.val;
		if (l2 != null) v2 = l2.val;

		let sum = v1 + v2 + carryOver;
		carryOver = Math.floor(sum / 10);
		sum = sum % 10;
		currentNode.next = new ListNode(sum);
		currentNode = currentNode.next;

		// stop if there is no next element
		if (l1 != null) l1 = l1.next;
		if (l2 != null) l2 = l2.next;
	}

	if (carryOver > 0) {
		currentNode.next = new ListNode(carryOver);
	}

	return result.next; // we didn't return result because the first entry is 0 and we need to skip it.
};
