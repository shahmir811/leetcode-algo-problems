// PROBLEM LINK:
// https://leetcode.com/problems/find-the-duplicate-number/

// STATEMENT
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.

// EXAMPLES
// Example 1:
// Input: nums = [1, 3, 4, 2, 2];
// Output: 2;

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

const findDuplicate = nums => {
	const obj = {};

	for (const element of nums) {
		if (obj[element]) return element;

		obj[element] = true;
	}
};
