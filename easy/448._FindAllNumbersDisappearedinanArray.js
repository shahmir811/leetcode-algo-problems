// PROBLEM LINK:
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// STATEMENT
// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// EXAMPLES
// Example 1:
// Input: nums = [4, 3, 2, 7, 8, 2, 3, 1];
// Output: [5, 6];

// Example 2:
// Input: nums = [1, 1];
// Output: [2];

// Following code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const findDisappearedNumbers = nums => {
	let set = new Set(nums);
	let result = [];

	// We didn't start with 0 index, it will push 0 to result array.
	for (let i = 1; i <= nums.length; i++) {
		if (!set.has(i)) result.push(i);
	}

	return result;
};
