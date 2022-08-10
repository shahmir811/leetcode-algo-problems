// PROBLEM LINK:
// https://leetcode.com/problems/house-robber/

// STATEMENT
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money
// you can rob tonight without alerting the police.

// EXAMPLES
// Example 1:
// Input: nums = [1, 2, 3, 1];
// Output: 4;

// Example 2:
// Input: nums = [2, 7, 9, 3, 1];
// Output: 12;

// Constraints:
// Donot rob adjacent houses

// Following code has:
// Time complexity: O(n)
// Space complexity: O(n)

const rob = nums => {
	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];
	if (nums.length === 2) return Math.max(nums[0], nums[1]);

	let maxMoney = [nums[0], Math.max(nums[0], nums[1])];
	for (let i = 2; i < nums.length; i++) {
		const max = Math.max(nums[i] + maxMoney[i - 2], maxMoney[i - 1]);
		maxMoney.push(max);
	}

	return maxMoney.pop();
};
