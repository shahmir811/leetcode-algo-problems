// PROBLEM LINK:
// https://leetcode.com/problems/find-all-duplicates-in-an-array/

// SOLUTION EXPLANANTION:
// https://www.youtube.com/watch?v=PzWtPDGHV18&list=PL8EhujvLdk7WuGPfsDpE8jQMwv7I2YitK&index=2

// STATEMENT
// Given an integer array nums of length n where all the integers of nums are in the range [1, n]
// and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// EXAMPLES
// Example 1:
// Input: nums = [4, 3, 2, 7, 8, 2, 3, 1];
// Output: [2, 3];

// Example 2:
// Input: nums = [1, 1, 2];
// Output: [1];

// Example 3:
// Input: nums = [1];
// Output: [];

// Constraints:
// Each element in nums appears once or twice.

const findDuplicates = nums => {
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		let value = Math.abs(nums[i]);
		let index = value - 1;

		if (nums[index] < 0) {
			result.push(value);
		} else {
			nums[index] *= -1;
		}
	}

	return result;
};
