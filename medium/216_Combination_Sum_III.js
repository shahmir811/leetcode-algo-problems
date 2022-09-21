// PROBLEM LINK:
// https://leetcode.com/problems/combination-sum-iii/

// EXPLANANTION:
// https://www.youtube.com/watch?v=Vz23n7y1Y8U&list=PLrClazTqVpJkZSFk6mRw5e0BOtOG4-7El&index=6

// STATEMENT
// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
//    - Only numbers 1 through 9 are used.
//    - Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice,
// and the combinations may be returned in any order.

// EXAMPLES
// Example 1:
// Input: (k = 3), (n = 7);
// Output: [[1, 2, 4]];

// Example 2:
// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]

// Example 3:
// Input: k = 4, n = 1
// Output: []

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const combinationSum3 = (k, n) => {
	const result = [];

	const nums = [];
	for (let i = 1; i < 10; i++) nums.push(i);

	const dfs = (i, nums, k, n, slate) => {
		// Backtrack case
		if (n < 0) return;

		// Base case
		if (slate.length === k) {
			if (n === 0) {
				result.push(slate.slice());
			}
			return;
		}

		// Recursive case

		for (let j = i; j < nums.length; j++) {
			slate.push(nums[j]);
			dfs(j + 1, nums, k, n - nums[j], slate);
			slate.pop();
		}
	};

	dfs(0, nums, k, n, []);

	return result;
};
