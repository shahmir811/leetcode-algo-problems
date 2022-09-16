// PROBLEM LINK:
// https://leetcode.com/problems/subsets/

// EXPLANANTION:
// https://www.youtube.com/watch?v=4paR1cZx9Tg&list=PLrClazTqVpJkZSFk6mRw5e0BOtOG4-7El&index=2&t=8s

// STATEMENT
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// EXAMPLES
// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Following Code has:
// Time Complexity: O(2^n * n)
// Space Complexity: O(2^n * n)

const subsets = nums => {
	const result = [];

	const dfs = (i, nums, slate) => {
		// Base case

		if (i === nums.length) {
			result.push(slate.slice(''));
			return;
		}

		// Recursive case

		// exclude
		dfs(i + 1, nums, slate);

		// include
		slate.push(nums[i]);
		dfs(i + 1, nums, slate);
		slate.pop();
	};

	dfs(0, nums, []);
	return result;
};
