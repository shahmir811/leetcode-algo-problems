// PROBLEM LINK:
// https://leetcode.com/problems/move-zeroes/description/

// STATEMENT
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero
// elements.
// NOTE: that you must do this in-place without making a copy of the array.

// EXAMPLES

// Example 1:
// Input: nums = [0, 1, 0, 3, 12];
// Output: [1, 3, 12, 0, 0];

// Example 2:
// Input: nums = [0];
// Output: [0];

const moveZeroes = nums => {
	let index = 0;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num !== 0) {
			nums[index] = num;
			index++;
		}
	}

	for (let i = index; i < nums.length; i++) {
		nums[i] = 0;
	}

	return nums;
};
