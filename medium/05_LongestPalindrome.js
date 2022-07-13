// PROBLEM LINK:
// https://leetcode.com/problems/longest-palindromic-substring/

// STATEMENT
// Given a string s, return the longest palindromic substring in s.

// EXAMPLES
// Example 1:
// Input: s = 'babad';
// Output: 'bab';

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

const longestPalindrome = s => {
	let startIndex = 0;
	let maxLength = 1;

	const expandAroundMiddle = (left, right) => {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			const currentPalLength = right - left + 1;
			if (currentPalLength > maxLength) {
				maxLength = currentPalLength;
				startIndex = left;
			}
			left--;
			right++;
		}
	};

	for (let i = 0; i < s.length; i++) {
		expandAroundMiddle(i - 1, i + 1); // s.length is odd
		expandAroundMiddle(i, i + 1); // s.length is even
	}

	return s.slice(startIndex, startIndex + maxLength);
};
