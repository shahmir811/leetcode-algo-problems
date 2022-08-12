// PROBLEM LINK:
// https://leetcode.com/problems/squares-of-a-sorted-array/

// EXPLANANTION:
// https://www.youtube.com/watch?v=mwDKqAVVr6c

// STATEMENT
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of
// each number sorted in non-decreasing order.

// EXAMPLES
// Example 1:
// Input: nums = [-4, -1, 0, 3, 10];
// Output: [0, 1, 9, 16, 100];

// Example 2:
// Input: nums = [-7, -3, 2, 3, 11];
// Output: [4, 9, 9, 49, 121];

// Following code has:
// Time complexity: O(n)
// Space complexity: O(n)

const sortedSquares = nums => {
	const result = new Array(nums.length).fill(0);

	let left = 0;
	let resultIndex = nums.length - 1;
	let right = nums.length - 1;

	while (left <= right) {
		let leftVal = Math.pow(nums[left], 2);
		let rightVal = Math.pow(nums[right], 2);

		if (rightVal > leftVal) {
			result[resultIndex] = rightVal;
			right--;
		} else {
			result[resultIndex] = leftVal;
			left++;
		}

		resultIndex--;
	}

	return result;
};
