// PROBLEM LINK:
// https://leetcode.com/problems/validate-binary-search-tree/

// EXPLANANTION:
// https://www.udemy.com/course/50-problems/learn/lecture/21602890?start=30#overview

// STATEMENT
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
//  - The left subtree of a node contains only nodes with keys less than the node's key.
//  - The right subtree of a node contains only nodes with keys greater than the node's key.
//  - Both the left and right subtrees must also be binary search trees.

// EXAMPLES
// Example 1:
// Input: root = [2, 1, 3];
// Output: true;

// Example 2:
// Input: root = [5, 1, 4, null, null, 3, 6];
// Output: false;

// Following Code has:
// Time Complexity: O(log n)
// Space Complexity: O(1)

const isValidBST = (root, min = -Infinity, max = Infinity) => {
	if (!root) return true;
	else if (root.val <= min || root.val >= max) return false;
	else return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
