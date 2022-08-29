// PROBLEM LINK:
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// EXPLANANTION:
// https://www.youtube.com/watch?v=Pl2vza7-txU&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=14

// STATEMENT
// Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced binary search tree.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every
// node never differs by more than one.

// EXAMPLES
// Example 1:
// Input: nums = [-10, -3, 0, 5, 9];
// Output: [0, -3, 9, -10, null, 5];

// Example 2:
// Input: nums = [1, 3];
// Output: [3, 1];

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const sortedArrayToBST = (nums, left = 0, right = nums.length - 1) => {
	if (left > right) return null;
	let mid = Math.floor((left + right) / 2);
	let root = new TreeNode(nums[mid]);

	root.left = sortedArrayToBST(nums, left, mid - 1);
	root.right = sortedArrayToBST(nums, mid + 1, right);

	return root;
};
