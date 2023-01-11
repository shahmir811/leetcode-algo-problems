// PROBLEM LINK:
// https://leetcode.com/problems/monotonic-array/

// EXPLANANTION:
// https://youtu.be/oGKBhkzPATM

// STATEMENT
// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone
// decreasing if for all i <= j, nums[i] >= nums[j].
// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// EXAMPLES
// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

// Example 2:
// Input: nums = [6,5,4,4]
// Output: true

// Example 3:
// Input: nums = [1,3,2]
// Output: false

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const isMonotonic = nums => {
	return isIncreasing(nums) || isDecreasing(nums);
};

const isIncreasing = nums => {
	let left = 0;
	let right = 1;

	while (right < nums.length) {
		if (nums[left] > nums[right]) return false;
		left++;
		right++;
	}

	return true;
};

const isDecreasing = nums => {
	let left = 0;
	let right = 1;

	while (right < nums.length) {
		if (nums[left] < nums[right]) return false;
		left++;
		right++;
	}

	return true;
};
