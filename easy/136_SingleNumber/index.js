// PROBLEM LINK:
// https://leetcode.com/problems/single-number/

// STATEMENT
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// EXAMPLES
// Example 1:
// Input: nums = [2, 2, 1];
// Output: 1;

// Example 2:
// Input: nums = [4, 1, 2, 1, 2];
// Output: 4;

const singleNumber = nums => {
	const values = {};

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (values[num]) {
			values[num] = false;
		} else {
			values[num] = true;
		}
	}

	for (const key in values) {
		if (values[key]) {
			return key;
		}
	}
};
