// PROBLEM LINK:
// https://leetcode.com/problems/insert-into-a-binary-search-tree/

// STATEMENT
// You are given the root node of a binary search tree (BST) and a value to insert into the tree.
// Return the root node of the BST after the insertion. It is guaranteed that the new value
// does not exist in the original BST.

// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains
// a BST after insertion. You can return any of them.

// EXAMPLES
// Example 1:
// Input: (root = [4, 2, 7, 1, 3]), (val = 5);
// Output: [4, 2, 7, 1, 3, 5];

// Following Code has:
// Time Complexity: O(log n)
// Space Complexity: O(1)

const insertIntoBST = (root, val) => {
	const newNode = new TreeNode(val);

	if (!root) {
		root = newNode;
		return root;
	}

	let current = root;

	while (true) {
		if (val < current.val) {
			if (current.left === null) {
				current.left = newNode;
				return root;
			}
			current = current.left;
		} else {
			if (current.right === null) {
				current.right = newNode;
				return root;
			}
			current = current.right;
		}
	}
};
