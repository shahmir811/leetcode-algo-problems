// PROBLEM LINK:
// https://leetcode.com/problems/contains-duplicate/description/

// STATEMENT
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every
// element is distinct.

// REQUIREMENTS
// -
// -

// EXAMPLES
// Example 1:
// Input: nums = [1, 2, 3, 1];
// Output: true;

// Example 2:
// Input: nums = [1, 2, 3, 4];
// Output: false;

// Example 3:
// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// Output: true;

// Following code has:
// Time complexity: O(n)
// Space complexity: O(n) // Number of key/value pairs in hashObj is equal to number of unique values in an array

const containsDuplicate = nums => {
	const hashObj = {};

	for (const element of nums) {
		if (hashObj[element]) {
			return true;
		}

		hashObj[element] = true;
	}
	return false;
};
