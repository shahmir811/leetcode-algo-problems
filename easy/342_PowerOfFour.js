// PROBLEM LINK:
// https://leetcode.com/problems/power-of-four/

// STATEMENT
// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4 ^ x.

// EXAMPLES
// Example 1:
// Input: n = 16
// Output: true

// Example 2:
// Input: n = 5
// Output: false

// Example 3:
// Input: n = 1
// Output: true

// Below code has:
// Time Complexity: O(log n)
// Space Complexity: O(1)

const isPowerOfFour = n => {
	let i = 1;

	while (i < n) {
		i *= 4;
	}

	return i === n;
};
