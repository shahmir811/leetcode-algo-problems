// PROBLEM LINK:
// https://leetcode.com/problems/a-number-after-a-double-reversal/

// STATEMENT
// Reversing an integer means to reverse all its digits.
// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2.
// Return true if reversed2 equals num. Otherwise return false.

// EXAMPLES
// Example 1:
// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.

// Example 2:
// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.

// Example 3:
// Input: num = 0
// Output: true
// Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.

const reverseDigits = digits => {
	let word = digits.toString().split('').reverse().join('');
	return parseInt(word);
};

const isSameAfterReversals = num => {
	const reverse1 = reverseDigits(num);
	const reverse2 = reverseDigits(reverse1);

	return reverse2 === num;
};
