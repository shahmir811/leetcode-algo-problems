// PROBLEM LINK:
// https://leetcode.com/problems/average-of-levels-in-binary-tree/

// STATEMENT
// Given the root of a binary tree, return the average value of the nodes on
// each level in the form of an array. Answers within 10^-5 of the actual answer will be accepted.

// EXAMPLES
// Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: [3.0, 14.5, 11.0];

// Example 2:
// Input: root = [3, 9, 20, 15, 7];
// Output: [3.0, 14.5, 11.0];

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const averageOfLevels = root => {
	const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

	if (!root) return [];

	const queue = [root];
	const result = [];
	const finalOutput = [];

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

	for (let i = 0; i < result.length; i++) {
		const arr = result[i];
		finalOutput.push(avg(arr));
	}

	return finalOutput;
};
