// Problem link:
// https://leetcode.com/problems/maximum-subarray/description/

// EXPLANATION:
// https://www.youtube.com/watch?v=WdK1Uhsza_I

// STATEMENT
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum
// and return its sum.
// A subarray is a contiguous part of an array.

// REQUIREMENTS
// -
// -

// EXAMPLES

// Example 1:
// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// Output: 6;

// Example 2:
// Input: nums = [1];
// Output: 1;

// Example 3:
// Input: nums = [5, 4, -1, 7, 8];
// Output: 23;

// Following code has:
// Time complexity: O(n)
// Space complexity: O(1)

const maxSubArray = nums => {
	let solution = nums[0];

	for (let i = 1; i < nums.length; i++) {
		nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
		solution = Math.max(solution, nums[i]);
	}

	return solution;
};
