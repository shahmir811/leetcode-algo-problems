// PROBLEM LINK:
// https://leetcode.com/problems/sort-characters-by-frequency/

// STATEMENT
// Given a string s, sort it in decreasing order based on the frequency of the characters.
// The frequency of a character is the number of times it appears in the string.
// Return the sorted string. If there are multiple answers, return any of them.

// EXAMPLES
// Example 1:
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 3:
// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

// Constraints:
// "s" consists of uppercase and lowercase English letters and digits.

// It can be done using Prirority Queues as well but we used different approach.
const frequencySort = s => {
	let map = {};
	let res = '';

	for (const char of s) {
		map[char] = ++map[char] || 1;
	}

	let sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);

	for (let char of sorted) {
		for (let i = 0; i < map[char]; i++) {
			res += char;
		}
	}

	return res;
};
