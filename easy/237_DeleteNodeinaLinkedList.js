// PROBLEM LINK:
// https://leetcode.com/problems/delete-node-in-a-linked-list/

// EXPLANANTION:
// https://www.youtube.com/watch?v=ik44BcorbjE

// STATEMENT
// Write a function to delete a node in a singly-linked list.
// You will not be given access to the head of the list, instead
// you will be given access to the node to be deleted directly.

// It is guaranteed that the node to be deleted is not a tail node in the list.

// EXAMPLES
// Example 1:
// Input: (head = [4, 5, 1, 9]), (node = 5);
// Output: [4, 1, 9];

// Example 2:
// Input: (head = [4, 5, 1, 9]), (node = 1);
// Output: [4, 5, 9];

// Following code has:
// Time Complexity: O(1)
// Space Complexity: O(1)

const deleteNode = node => {
	let next2 = node.next.next;
	node.val = node.next.val;
	node.next = next2;
};
