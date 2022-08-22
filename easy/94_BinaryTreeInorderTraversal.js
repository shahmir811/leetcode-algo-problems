// PROBLEM LINK:
// https://leetcode.com/problems/binary-tree-inorder-traversal/

// STATEMENT
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// EXAMPLES
// Example 1:
// Input: root = [1, null, 2, 3];
// Output: [1, 3, 2];

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const inorderTraversal = root => {
	if (!root) return [];

	let current = root;
	const visited = [];

	const traverse = node => {
		if (node.left) traverse(node.left);
		visited.push(node.val);
		if (node.right) traverse(node.right);
	};

	traverse(current);

	return visited;
};
