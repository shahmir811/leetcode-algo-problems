// PROBLEM LINK:
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// STATEMENT
// Given a string s, find the length of the longest substring without repeating characters.

// EXAMPLES
// Example 1:
// Input: s = "abcabcbb"
// Output: 3

// Example 2:
// Input: s = "bbbbb"
// Output: 1

// Example 3:
// Input: s = "pwwkew"
// Output: 3

const lengthOfLongestSubstring = s => {
	let max = 0;
	let startingWindow = 0; // start of sliding window
	let hasMap = {};

	for (let end = 0; end < s.length; end++) {
		let char = s[end];

		if (hasMap[char] !== undefined && hasMap[char] >= startingWindow) {
			startingWindow = hasMap[char] + 1;
		}

		hasMap[char] = end;
		max = Math.max(max, end - startingWindow + 1);
	}

	return max;
};
