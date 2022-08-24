// PROBLEM LINK:
// https://leetcode.com/problems/running-sum-of-1d-array/

// STATEMENT
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// EXAMPLES
// Example 1:
// Input: nums = [1, 2, 3, 4];
// Output: [1, 3, 6, 10];

// Example 2:
// Input: nums = [1, 1, 1, 1, 1];
// Output: [1, 2, 3, 4, 5];

// Following Code has:
// Time Complexity: O()
// Space Complexity: O(1)

const runningSum = nums => {
	nums[1] = nums[0] + nums[1];

	for (let i = 2; i < nums.length; i++) {
		nums[i] = nums[i] + nums[i - 1];
	}

	return nums;
};
