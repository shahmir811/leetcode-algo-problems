// PROBLEM LINK:
// https://leetcode.com/problems/plus-one/

// EXPLANANTION:
// https://www.youtube.com/watch?v=P3K_hKNU2ME&t=1s

// STATEMENT
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the
// integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer
// does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// EXAMPLES
// Example 1:
// Input: digits = [1, 2, 3];
// Output: [1, 2, 4];

// Example 2:
// Input: digits = [4, 3, 2, 1];
// Output: [4, 3, 2, 2];

// Example 3:
// Input: digits = [9];
// Output: [1, 0];

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const plusOne = digits => {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] < 9) {
			digits[i] += 1;
			return digits;
		} else {
			digits[i] = 0;
		}
	}

	digits.unshift(1);
	return digits;
};
