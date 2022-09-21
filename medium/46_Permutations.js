// PROBLEM LINK:
// https://leetcode.com/problems/permutations/

// EXPLANANTION:
// https://www.youtube.com/watch?v=4FdPoW4Qzb4&list=PLrClazTqVpJkZSFk6mRw5e0BOtOG4-7El&index=4

// STATEMENT
// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

// EXAMPLES
// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Following Code has:
// Time Complexity: O(n! * n)
// Space Complexity: O(n! * n)

const permute = nums => {
	const result = [];

	const dfs = (i, nums) => {
		// Base case
		if (i === nums.length) {
			result.push(nums.slice());
			return;
		}

		// Recursive case
		for (let j = i; j < nums.length; j++) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
			dfs(i + 1, nums);
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}
	};

	dfs(0, nums);

	return result;
};
