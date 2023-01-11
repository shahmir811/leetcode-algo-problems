// PROBLEM LINK:
// https://leetcode.com/problems/number-of-good-pairs/

// STATEMENT
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// EXAMPLES
// Example 1:
// Input: nums = [1, 2, 3, 1, 1, 3];
// Output: 4;

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const numIdenticalPairs = nums => {
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		const firstElement = nums[i];

		for (let j = i; j < nums.length; j++) {
			const secondElement = nums[j];
			console.log(firstElement + ' + ' + secondElement);

			if (firstElement === secondElement && i < j) result.push([i, j]);
		}
	}

	return result.length;
};
