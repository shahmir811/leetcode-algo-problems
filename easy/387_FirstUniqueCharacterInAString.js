// PROBLEM LINK:
// https://leetcode.com/problems/first-unique-character-in-a-string/

// STATEMENT
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// EXAMPLES
// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// "s" consists of only lowercase English letters.

// Below code has:
// Time Complexity: O(n)
// Space Complexity: O(1) // as we used Hashmaps

const firstUniqChar = s => {
	const characterCount = {};

	for (const char of s) {
		characterCount[char] = ++characterCount[char] || 1;
	}

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (characterCount[char] === 1) return i;
	}

	return -1;
};
