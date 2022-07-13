// PROBLEM LINK:
// https://leetcode.com/problems/group-anagrams/

// STATEMENT
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// EXAMPLES
// Example 1:
// Input: strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// Output: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];

// Example 2:
// Input: strs = [''];
// Output: [['']];

// Example 3:
// Input: strs = ['a'];
// Output: [['a']];

// Constraints:
// strs consists of lowercase English letters.

// Following code has:
// Time complexity: O(n k log k) // n is the number of strings and k is the length of the strings
// Space complexity: O(nk) // Data stored in grouped hashMap/hashTable

const groupAnagrams = strs => {
	let grouped = {};

	for (let i = 0; i < strs.length; i++) {
		const word = strs[i];
		const key = word.split('').sort().join('');

		if (!grouped[key]) grouped[key] = [];

		grouped[key].push(word);
	}

	return Object.values(grouped);
};
