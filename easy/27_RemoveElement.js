// PROBLEM LINK:
// https://leetcode.com/problems/remove-element/

// STATEMENT
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The relative order of the elements may be changed.

// EXAMPLES
// Example 1:
// Input: (nums = [3, 2, 2, 3]), (val = 3);
// Output: 2, (nums = [2, 2, _, _]);

// Example 2:
// Input: (nums = [0, 1, 2, 2, 3, 0, 4, 2]), (val = 2);
// Output: 5, (nums = [0, 1, 4, 0, 3, _, _, _]);

const removeElement = (nums, val) => {
	let indexCounter = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[indexCounter] = nums[i];
			indexCounter++;
		}
	}

	return indexCounter;
};
