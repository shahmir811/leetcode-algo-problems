// PROBLEM LINK:
// https://leetcode.com/problems/binary-search/

// EXPLANANTION:
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// EXAMPLES
// Example 1:
// Input: (nums = [-1, 0, 3, 5, 9, 12]), (target = 9);
// Output: 4;

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1

// Following Code has:
// Time Complexity: O(log n)
// Space Complexity: O(1)

const search = (nums, target) => {
	let start = 0;
	let end = nums.length - 1;
	let middle = Math.floor((start + end) / 2);

	while (nums[middle] !== target && start <= end) {
		if (target < nums[middle]) end = middle - 1;
		else start = middle + 1;

		middle = Math.floor((start + end) / 2);
	}

	return nums[middle] === target ? middle : -1;
};
