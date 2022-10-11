// PROBLEM LINK:
// https://leetcode.com/problems/search-insert-position/

// EXPLANANTION:
//

// STATEMENT
// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// EXAMPLES
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Following Code has:
// Time Complexity: O(log n)
// Space Complexity: O(1)

const searchInsert = (nums, target) => {
	let start = 0;
	let end = nums.length - 1;

	let mid = Math.floor((start + end) / 2);

	while (nums[mid] !== target && start <= end) {
		if (nums[mid] < target) start = mid + 1;
		else end = mid - 1;

		mid = Math.floor((start + end) / 2);
	}

	return nums[mid] === target ? mid : mid + 1;
};
