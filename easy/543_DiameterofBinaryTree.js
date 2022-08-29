// PROBLEM LINK:
// https://leetcode.com/problems/diameter-of-binary-tree/

// EXPLANANTION:
// https://www.youtube.com/watch?v=ib_JPaMEUhw&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=10

// STATEMENT
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// EXAMPLES
// Example 1:
// Input: root = [1, 2, 3, 4, 5];
// Output: 3;

// Example 2:
// Input: root = [1, 2]
// Output: 1

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const diameterOfBinaryTree = root => {
	if (!root) return 0;

	let max = 0;

	const dfs = node => {
		if (!node) return 0;

		let left = dfs(node.left);
		let right = dfs(node.right);

		max = Math.max(max, left + right);

		return Math.max(left, right) + 1;
	};

	dfs(root);
	return max;
};
