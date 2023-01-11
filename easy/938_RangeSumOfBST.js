// PROBLEM LINK:
// https://leetcode.com/problems/range-sum-of-bst/

// EXPLANANTION:
// https://youtu.be/AdX9Gd7GJYs

// STATEMENT
// Given the root node of a binary search tree and two integers low and high,
// return the sum of values of all nodes with a value in the inclusive range [low, high].

// EXAMPLES
// Example 1:
// Input: (root = [10, 5, 15, 3, 7, null, 18]), (low = 7), (high = 15);
// Output: 32;

// Example 2:
// Input: (root = [10, 5, 15, 3, 7, 13, 18, 1, null, 6]), (low = 6), (high = 10);
// Output: 23;

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const rangeSumBST = (root, low, high) => {
	let totalSum = 0;

	const traverse = node => {
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);

		if (node.val >= low && node.val <= high) totalSum += node.val;
	};

	traverse(root);
	return totalSum;
};
