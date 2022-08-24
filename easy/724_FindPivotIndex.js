// PROBLEM LINK:
// https://leetcode.com/problems/find-pivot-index/

// EXPLANANTION:
//

// STATEMENT
// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index
// is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements
// to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// EXAMPLES
// Example 1:
// Input: nums = [1, 7, 3, 6, 5, 6];
// Output: 3;

// Example 2:
// Input: nums = [1,2,3]
// Output: -1

// Example 3:
// Input: nums = [2, 1, -1];
// Output: 0;

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const pivotIndex = nums => {
	const totalSum = nums.reduce((sum, i) => sum + i, 0);
	let leftSum = 0;

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];
		const rightSum = totalSum - leftSum - element;

		if (rightSum === leftSum) return i;

		leftSum += element;
	}

	return -1;
};
