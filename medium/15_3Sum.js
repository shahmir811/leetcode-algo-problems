// PROBLEM LINK:
// https://leetcode.com/problems/3sum/

// STATEMENT
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and
// j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// EXAMPLES
// Example 1:
// Input: nums = [-1, 0, 1, 2, -1, -4];
// Output: [
// 	[-1, -1, 2],
// 	[-1, 0, 1],
// ];

// Example 2:
// Input: nums = [0, 1, 1];
// Output: [];

// Example 3:
// Input: nums = [0, 0, 0, 0];
// Output: [0, 0, 0];

// Following code has:
// Time complexity: O(n^2)
// Space complexity: O(1)

const threeSum = nums => {
	// sort nums array in asc order

	nums.sort((a, b) => a - b);
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		const target = 0 - nums[i];
		let left = i + 1;
		let right = nums.length - 1;

		if (i > 0 && nums[i] === nums[i - 1]) continue;

		while (left < right) {
			if (nums[left] + nums[right] === target) {
				result.push([nums[i], nums[left], nums[right]]);
				left++;
				while (nums[left] === nums[left - 1]) left++;
			} else if (nums[left] + nums[right] < target) {
				left++;
			} else {
				right--;
			}
		}
	}

	return result;
};
