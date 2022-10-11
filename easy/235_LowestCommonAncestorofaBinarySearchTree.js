// PROBLEM LINK:
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// EXPLANANTION:
// https://youtu.be/fehixeGZY9k

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
	if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(root.left, p, q);
	} else if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(root.right, p, q);
	} else {
		return root;
	}
};
