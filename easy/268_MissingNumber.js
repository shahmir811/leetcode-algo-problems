// PROBLEM LINK:
// https://leetcode.com/problems/missing-number/

// STATEMENT
// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

// EXAMPLES
// Example 1:
// Input: nums = [3, 0, 1];
// Output: 2;

// Example 2:
// Input: nums = [0,1]
// Output: 2

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8

// Constraints:
// All the numbers of nums are unique.

const missingNumber = nums => {
	let obj = {};

	for (const element of nums) {
		obj[element] = true;
	}

	for (let i = 0; i <= nums.length; i++) {
		if (!obj[i]) return i;
	}
};
