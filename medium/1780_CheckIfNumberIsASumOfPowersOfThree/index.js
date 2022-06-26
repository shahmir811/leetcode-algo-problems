// PROBLEM LINK:
// https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/

// STATEMENT
// Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three.
// Otherwise, return false.
// An integer y is a power of three if there exists an integer x such that y == 3 ^ x.

// EXAMPLES
// Example 1:
// Input: n = 12
// Output: true
// Explanation: 12 = 31 + 32

// Example 2:
// Input: n = 91
// Output: true
// Explanation: 91 = 30 + 32 + 34

// Example 3:
// Input: n = 21
// Output: false

// Constraints:
// 1 <= n <= 10^7

const checkPowersOfThree = n => {
	const limit = 14; // 3 ** 14 < 10 ** 7 (Constraint).

	for (let i = 14; i >= 0; i--) {
		let number = Math.pow(3, i);

		if (n - number >= 0) n -= number;
		if (n === 0) return true;
	}

	return false;
};
