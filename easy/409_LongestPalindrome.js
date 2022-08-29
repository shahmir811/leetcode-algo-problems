// PROBLEM LINK:
// https://leetcode.com/problems/longest-palindrome/

// STATEMENT
// Given a string s which consists of lowercase or uppercase letters, return the length of the
// longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// EXAMPLES
// Example 1:
// Input: s = 'abccccdd';
// Output: 7;

// Example 2:
// Input: s = 'a';
// Output: 1;

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const longestPalindrome = s => {
	const obj = {};
	let longest = 0;

	for (const char of s) {
		obj[char] = ++obj[char] || 1;

		if (obj[char] % 2 === 0) longest += 2;
	}

	// If s.length is greater than longest then we know that we can add
	// a unique char in the middle of the palindrome
	return s.length > longest ? longest + 1 : longest;
};
