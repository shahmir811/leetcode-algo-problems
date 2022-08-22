// PROBLEM LINK:
// https://leetcode.com/problems/binary-tree-preorder-traversal/

// STATEMENT
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// EXAMPLES
// Example 1:
// Input: root = [1, null, 2, 3];
// Output: [1, 2, 3];

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const preorderTraversal = root => {
	if (!root) return [];

	let current = root;
	const visited = [];

	const traverse = node => {
		visited.push(node.val);
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	};

	traverse(current);

	return visited;
};
