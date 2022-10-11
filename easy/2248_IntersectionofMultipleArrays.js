// PROBLEM LINK:
// https://leetcode.com/problems/intersection-of-multiple-arrays/

// EXPLANANTION:
//

// STATEMENT
// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers,
// return the list of integers that are present in each array of nums sorted in ascending order.

// EXAMPLES
// Example 1:
// Input: nums = [
// 	[3, 1, 2, 4, 5],
// 	[1, 2, 3, 4],
// 	[3, 4, 5, 6],
// ];
// Output: [3, 4];

// Example 2:
// Input: nums = [[1,2,3],[4,5,6]]
// Output: []

// Following Code has:
// Time Complexity: O(n log n)
// Space Complexity: O(n)

const intersection = nums => {
	const obj = {};

	for (const arr of nums) {
		for (let i = 0; i < arr.length; i++) {
			const num = arr[i];

			obj[num] = ++obj[num] || 1;
		}
	}

	const length = nums.length;
	const result = [];

	for (const key in obj) {
		if (obj[key] === length) {
			result.push(Number(key));
		}
	}

	result.sort((a, b) => a - b);

	return result;
};
