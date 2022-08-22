// PROBLEM LINK:
// https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/

// STATEMENT
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.

// EXAMPLES
// Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: 3;

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const maxDepth = root => {
	if (!root) return 0;

	const queue = [root];
	const result = [];

	while (queue.length > 0) {
		let length = queue.length;

		result.push(queue.map(node => node.val));

		while (length--) {
			let node = queue.shift();

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}

	return result.length;
};
