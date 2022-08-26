// PROBLEM LINK:
// https://leetcode.com/problems/isomorphic-strings/

// EXPLANANTION:
// https://www.youtube.com/watch?v=UWrv5bgdX8w&t=8s

// STATEMENT
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

// EXAMPLES
// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const isIsomorphic = (s, t) => {
	let sMap = {};
	let tMap = {};

	for (let i = 0; i < s.length; i++) {
		let sChar = s[i];
		let tChar = t[i];

		if (!sMap[sChar]) sMap[sChar] = tChar;

		if (!tMap[tChar]) tMap[tChar] = sChar;

		const condition = sMap[sChar] !== tChar || tMap[tChar] !== sChar;

		if (condition) return false;
	}
	return true;
};
