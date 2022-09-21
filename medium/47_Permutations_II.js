// PROBLEM LINK:
// https://leetcode.com/problems/permutations-ii/

// EXPLANANTION:
// https://www.youtube.com/watch?v=9QOHkW-ZrVE&list=PLrClazTqVpJkZSFk6mRw5e0BOtOG4-7El&index=5&t=1s

// STATEMENT
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations
// in any order.

// EXAMPLES
// Example 1:
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Following Code has:
// Time Complexity: O(n! * n)
// Space Complexity: O(n! * n)

const permuteUnique = nums => {
	const result = [];

	const dfs = (i, nums) => {
		if (i === nums.length) {
			result.push(nums.slice());
			return;
		}

		const hash = {};

		for (let j = i; j < nums.length; j++) {
			if (hash[nums[j]]) continue;
			hash[nums[j]] = true;

			[nums[i], nums[j]] = [nums[j], nums[i]];
			dfs(i + 1, nums);
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}
	};

	dfs(0, nums);
	return result;
};
