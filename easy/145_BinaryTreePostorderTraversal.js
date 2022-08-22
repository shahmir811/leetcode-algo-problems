// PROBLEM LINK:
// https://leetcode.com/problems/binary-tree-postorder-traversal/

// STATEMENT
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// EXAMPLES
// Example 1:
// Input: root = [1, null, 2, 3];
// Output: [3, 2, 1];

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const postorderTraversal = root => {
	if (!root) return [];

	let current = root;
	const visited = [];

	const traverse = node => {
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);

		visited.push(node.val);
	};

	traverse(current);

	return visited;
};
