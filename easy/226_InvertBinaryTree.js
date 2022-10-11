// PROBLEM LINK:
// https://leetcode.com/problems/invert-binary-tree/

// EXPLANANTION:
// https://youtu.be/Wz-5PlBYGhA

// STATEMENT
// Given the root of a binary tree, invert the tree, and return its root.

// EXAMPLES
// Example 1:
// Input: root = [4, 2, 7, 1, 3, 6, 9];
// Output: [4, 7, 2, 9, 6, 3, 1];

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const invertTree = root => {
	if (root) {
		[root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
	}

	return root;
};
