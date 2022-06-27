// PROBLEM LINK:
// https://leetcode.com/problems/rotate-array/description/

// STATEMENT
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// EXAMPLES

// Example 1:
// Input: (nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3);
// Output: [5, 6, 7, 1, 2, 3, 4];

// Example 2:
// Input: (nums = [-1, -100, 3, 99]), (k = 2);
// Output: [3, 99, -1, -100];

const revNums = (nums, start, end) => {
	// SWAP
	while (start < end) {
		const temp = nums[start];
		nums[start] = nums[end];
		nums[end] = temp;
		start++;
		end--;
	}
};

const rotate = (nums, k) => {
	k = k % nums.length;

	nums.reverse();
	revNums(nums, 0, k - 1);
	revNums(nums, k, nums.length - 1);
	return nums;
};
