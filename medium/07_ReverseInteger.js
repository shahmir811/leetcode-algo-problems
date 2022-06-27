// PROBLEM LINK:
// https://leetcode.com/problems/reverse-integer/

// STATEMENT
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside
// the signed 32-bit integer range , then return 0.

// EXAMPLES
// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

const reverse = x => {
	const limit = 2 ** 31; // 32-bit integer
	const reverseStr = x.toString().split('').reverse().join('');
	const reverseInt = parseInt(reverseStr);

	return reverseInt > limit ? 0 : Math.sign(x) * reverseInt;
};
