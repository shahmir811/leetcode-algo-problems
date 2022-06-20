// Problem link:
// https://leetcode.com/problems/longest-common-prefix/

// STATEMENT
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// EXAMPLES

// Input: strs = ['flower', 'flow', 'flight'];
// Output: 'fl';

// Input: strs = ['dog', 'racecar', 'car'];
// Output: '';

const longestCommonPrefix = strs => {
	let prefix = '';

	if (strs.length === 0) return prefix;

	for (let i = 0; i < strs[0].length; i++) {
		let character = strs[0][i];
		for (let j = 0; j < strs.length; j++) {
			if (strs[j][i] !== character) return prefix;
		}

		prefix = prefix + character;
	}

	return prefix;
};
