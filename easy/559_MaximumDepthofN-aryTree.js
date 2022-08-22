// PROBLEM LINK:
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

// STATEMENT
// Given a n-ary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated
// by the null value

// EXAMPLES
// Example 1:
// Input: root = [1, null, 3, 2, 4, null, 5, 6];
// Output: 3;

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const maxDepth = root => {
	if (!root) return 0;

	const queue = [root];
	let level = 0;

	while (queue.length > 0) {
		let length = queue.length;

		while (length--) {
			let node = queue.shift();

			for (const child of node.children) {
				queue.push(child);
			}
		}
		level++;
	}

	return level;
};
