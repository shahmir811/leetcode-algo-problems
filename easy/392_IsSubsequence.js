// PROBLEM LINK:
// https://leetcode.com/problems/is-subsequence/

// EXPLANANTION:
// https://www.youtube.com/watch?v=wK7HOM2xqM0

// STATEMENT
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting
// some (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// EXAMPLES
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const isSubsequence = (s, t) => {
	let p1 = 0;
	let p2 = 0;

	while (p1 < s.length && p2 < t.length) {
		if (s[p1] === t[p2]) {
			p1++;
		}
		p2++;
	}

	return p1 === s.length;
};
