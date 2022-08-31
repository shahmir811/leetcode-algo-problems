// PROBLEM LINK:
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// EXPLANANTION:
// https://www.youtube.com/watch?v=VSuZoj4YC1E&t=189s

// STATEMENT
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// EXAMPLES
// Example 1:
// Input: (root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), (p = 5), (q = 1);
// Output: 3;

// Example 2:
// Input: (root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), (p = 5), (q = 4);
// Output: 5;

// Example 3:
// Input: root = [1,2], p = 1, q = 2
// Output: 1

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const lowestCommonAncestor = (root, p, q) => {
	let result = null;

	const dfs = node => {
		if (!node) return false;

		let left = dfs(node.left);
		let right = dfs(node.right);

		let current = node === p || node === q;

		if (left + right + current >= 2) result = node;

		return left || right || current;
	};

	dfs(root);
	return result;
};
