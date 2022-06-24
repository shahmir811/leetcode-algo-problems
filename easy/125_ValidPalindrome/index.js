// PROBLEM LINK:
// https://leetcode.com/problems/valid-palindrome/

// STATEMENT
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
// non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters
// and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// EXAMPLES
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

const isPalindrome = s => {
	let str = s
		.toLowerCase()
		.replace(/[^a-z0-9]/g, '') // remove special characters
		.replace(/\s/g, ''); // remove spaces

	let reverse = str.split('').reverse().join('');

	if (str === reverse) return true;

	return false;
};
