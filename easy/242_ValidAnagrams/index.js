// PROBLEM LINK:
// https://leetcode.com/problems/valid-anagram/

// STATEMENT
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// EXAMPLES
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;

	const objs = {};
	const objt = {};

	for (const char of s) {
		objs[char] = ++objs[char] || 1;
	}

	for (const char of t) {
		objt[char] = ++objt[char] || 1;
	}

	for (const key in objs) {
		if (objs[key] !== objt[key]) return false;
	}

	return true;
};
