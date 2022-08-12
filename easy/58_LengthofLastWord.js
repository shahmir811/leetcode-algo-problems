// PROBLEM LINK:
// https://leetcode.com/problems/length-of-last-word/

// STATEMENT
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// EXAMPLES
// Example 1:
// Input: s = 'Hello World';
// Output: 5;

// Example 2:
// Input: s = '   fly me   to   the moon  ';
// Output: 4;

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const lengthOfLastWord = s => {
	let str = s.trim().split(' ');
	let length = str.length;

	return str[length - 1].length;
};
