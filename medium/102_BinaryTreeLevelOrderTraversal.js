// PROBLEM LINK:
// https://leetcode.com/problems/binary-tree-level-order-traversal/

// EXPLANANTION:
// https://www.youtube.com/watch?v=k51JOgA0mw0&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=1

// STATEMENT
// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

// EXAMPLES
// Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: [[3], [9, 20], [15, 7]];

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const levelOrder = root => {
	if (!root) return [];

	const queue = [root];
	const result = [];

	while (queue.length) {
		let length = queue.length;
		// push all nodes from queue to result
		result.push(queue.map(node => node.val));

		while (length--) {
			let node = queue.shift();

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}

	return result;
};
