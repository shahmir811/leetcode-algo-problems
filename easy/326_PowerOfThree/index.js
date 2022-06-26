// PROBLEM LINK:
// https://leetcode.com/problems/power-of-three/

// STATEMENT
// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3 ^ x.

// EXAMPLES
// Example 1:
// Input: n = 27
// Output: true

// Example 2:
// Input: n = 0
// Output: false

// Example 3:
// Input: n = 9
// Output: true

// Below code has:
// Time Complexity: O(log n)
// Space Complexity: O(1)

const isPowerOfThree = n => {
	let i = 1;

	while (i < n) {
		i *= 3;
	}

	return i === n;
};
