// PROBLEM LINK:
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// STATEMENT
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
// such that each unique element appears only once. The relative order of the elements should be kept the same.

// EXAMPLES
// Example 1:
// Input: nums = [1, 1, 2];
// Output: 2, (nums = [1, 2, _]);

// Example 2:
// Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// Output: 5, (nums = [0, 1, 2, 3, 4, _, _, _, _, _]);

const removeDuplicates = nums => {
	let indexCounter = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1]) {
			nums[indexCounter] = nums[i];
			indexCounter++;
		}
	}

	return nums;
};
