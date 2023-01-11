// PROBLEM LINK:
// https://leetcode.com/problems/validate-binary-search-tree/

// EXPLANANTION:
// https://youtu.be/i1m-rywzw68

// STATEMENT
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
//  - The left subtree of a node contains only nodes with keys less than the node's key.
//  - The right subtree of a node contains only nodes with keys greater than the node's key.
//  - Both the left and right subtrees must also be binary search trees.

// EXAMPLES
// Example 1:
// Input: root = [2, 1, 3];
// Output: true;

// Example 2:
// Input: root = [5, 1, 4, null, null, 3, 6];
// Output: false;

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const isValidBST = root => {
	const recursive = (root, min, max) => {
		if (!root) return true;
		if (root.val <= min || root.val >= max) return false;

		return recursive(root.left, min, root.val) && recursive(root.right, root.val, max);
	};

	return recursive(root, -Infinity, Infinity);
};
