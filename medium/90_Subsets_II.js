// PROBLEM LINK:
// https://leetcode.com/problems/subsets-ii/

// EXPLANANTION:
// https://www.youtube.com/watch?v=ZFRJ_uZhMSM&list=PLrClazTqVpJkZSFk6mRw5e0BOtOG4-7El&index=3

// STATEMENT
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// EXAMPLES
// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Following Code has:
// Time Complexity: O(2^n * n)
// Space Complexity: O(2^n * n)

const subsetsWithDup = nums => {
	const result = [];
	nums.sort((a, b) => a - b);

	const dfs = (i, nums, slate) => {
		// Base case
		if (i === nums.length) {
			result.push(slate.slice());
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

	const hash = {};

	for (const element of result) {
		if (hash[element]) continue;

		hash[element] = element;
	}

	return Object.values(hash);
};
