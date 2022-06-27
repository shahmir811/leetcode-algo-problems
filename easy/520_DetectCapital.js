// PROBLEM LINK:
// https://leetcode.com/problems/detect-capital/

// STATEMENT
// We define the usage of capitals in a word to be right when one of the following cases holds:
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".

// Given a string word, return true if the usage of capitals in it is right.

// EXAMPLES
// Example 1:
// Input: word = "USA"
// Output: true

// Example 2:
// Input: word = "FlaG"
// Output: false

// Below code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const detectCapitalUse = word => {
	let capitalWords = 0;

	for (const char of word) {
		if (char === char.toUpperCase()) {
			capitalWords += 1;
		}
	}

	let condition1 = capitalWords === word.length || capitalWords === 0;
	let onlyFirstLetterCapital = word[0] === word[0].toUpperCase() && capitalWords === 1;

	return condition1 || onlyFirstLetterCapital;
};
