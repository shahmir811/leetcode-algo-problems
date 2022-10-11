// PROBLEM LINK:
// https://leetcode.com/problems/sum-of-left-leaves/description/

// EXPLANANTION:
//

// STATEMENT
// Given the root of a binary tree, return the sum of all left leaves.
// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

// EXAMPLES
// Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: 24;

// Example 2:
// Input: root = [1]
// Output: 0

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const sumOfLeftLeaves = root => {
	let totalSum = 0;

	const dfs = node => {
		if (!node) return;
		if (node.left) dfs(node.left);

		if (node.left && !node.left.left && !node.left.right) {
			totalSum += node.left.val;
		}

		if (node.right) dfs(node.right);
	};

	dfs(root);

	return totalSum;
};
