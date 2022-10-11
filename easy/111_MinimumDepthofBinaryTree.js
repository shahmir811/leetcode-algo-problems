// PROBLEM LINK:
// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// EXPLANANTION:
// https://youtu.be/hmvao4o22-w

// STATEMENT
// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

// EXAMPLES
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const minDepth = root => {
	if (!root) return 0;

	let minDepthLevel = 1;

	const queue = [root];

	while (queue.length) {
		let levelSize = queue.length;

		while (levelSize--) {
			const node = queue.shift();

			if (node.left === null && node.right === null) return minDepthLevel;

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		minDepthLevel++;
	}
};
