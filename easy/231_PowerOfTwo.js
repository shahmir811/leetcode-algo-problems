// PROBLEM LINK:
// https://leetcode.com/problems/power-of-two/

// STATEMENT
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2 ^ x.

// EXAMPLES
// Example 1:
// Input: n = 1
// Output: true
// Explanation: 2^0 = 1

// Example 2:
// Input: n = 16
// Output: true
// Explanation: 2^4 = 16

// Example 3:
// Input: n = 3
// Output: false

// Below code has:
// Time Complexity: O(log n)
// Space Complexity: O(1)

const isPowerOfTwo = n => {
	let i = 1;

	while (i < n) {
		i *= 2;
	}

	return i === n;
};
