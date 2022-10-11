// PROBLEM LINK:
// https://leetcode.com/problems/symmetric-tree/

// EXPLANANTION:
// https://youtu.be/L8S1Ij93NY4

// STATEMENT
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// EXAMPLES
// Example 1:
// Input: root = [1, 2, 2, 3, 4, 4, 3];
// Output: true;

// Example 2:
// Input: root = [1, 2, 2, null, 3, null, 3];
// Output: false;

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const isSymmetric = root => {
	const recursive = (l, r) => {
		if (!l && !r) return true;

		if (!l || !r) return false;

		if (l.val !== r.val) return false;

		return recursive(l.left, r.right) && recursive(l.right, r.left);
	};

	return recursive(root.left, root.right);
};
