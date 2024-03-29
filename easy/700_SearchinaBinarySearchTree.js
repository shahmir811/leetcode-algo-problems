// PROBLEM LINK:
// https://leetcode.com/problems/search-in-a-binary-search-tree/

// EXPLANANTION:
// https://www.youtube.com/watch?v=sE8q8RSW71Y

// STATEMENT
// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree rooted
// with that node. If such a node does not exist, return null.

// EXAMPLES
// Example 1:
// Input: (root = [4, 2, 7, 1, 3]), (val = 2);
// Output: [2, 1, 3];

// Example 2:
// Input: (root = [4, 2, 7, 1, 3]), (val = 5);
// Output: [];

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const searchBST = (root, val) => {
	if (!root) return null;
	if (root.val === val) return root;

	if (val < root.val) return searchBST(root.left, val);
	else return searchBST(root.right, val);
};
