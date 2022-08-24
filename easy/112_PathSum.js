// PROBLEM LINK:
// https://leetcode.com/problems/path-sum/

// EXPLANANTION:
// https://www.youtube.com/watch?v=_VQo0qMShFI&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=7

// STATEMENT
// Given the root of a binary tree and an integer targetSum, return true if the tree has a
// root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

// EXAMPLES
// Example 1:
// Input: (root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), (targetSum = 22);
// Output: true;

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const hasPathSum = (root, targetSum) => {
	if (!root) return false;

	let current = root;
	let hasPath = false;

	const traverse = (node, sum) => {
		const condition = node.left === null && node.right === null;
		if (condition) {
			if (node.val === sum) hasPath = true;

			return;
		}

		if (node.left) traverse(node.left, sum - node.val);
		if (node.right) traverse(node.right, sum - node.val);
	};

	traverse(current, targetSum);
	return hasPath;
};
