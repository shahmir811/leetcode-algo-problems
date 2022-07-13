// PROBLEM LINK:
// https://leetcode.com/problems/product-of-array-except-self/

// STATEMENT
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements
// of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// EXAMPLES
// Example 1:
// Input: nums = [1, 2, 3, 4];
// Output: [24, 12, 8, 6];

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Following code has:
// Time complexity: O(n)
// Space complexity: O(1)

const productExceptSelf = nums => {
	let output = nums.map(n => 1);
	let product = 1;

	// Multiply from left
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];

		output[i] = output[i] * product;
		product = product * num;
	}

	product = 1;
	// Multiply from right
	for (j = nums.length - 1; j >= 0; j--) {
		let num = nums[j];

		output[j] = output[j] * product;
		product = product * num;
	}

	return output;
};
