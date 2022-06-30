// PROBLEM LINK:
// https://leetcode.com/problems/capitalize-the-title/

// STATEMENT
// You are given a string title consisting of one or more words separated by a single space, where each word consists of
// English letters. Capitalize the string by changing the capitalization of each word such that:
//  - If the length of the word is 1 or 2 letters, change all letters to lowercase.
//  - Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

// EXAMPLES
// Example 1:
// Input: title = 'capiTalIze tHe titLe';
// Output: 'Capitalize The Title';

// Example 2:
// Input: title = "First leTTeR of EACH Word"
// Output: "First Letter of Each Word"

// Example 3:
// Input: title = "i lOve leetcode"
// Output: "i Love Leetcode"

const capitalizeTitle = function (title) {
	let arr = title.split(' ');

	for (let i = 0; i < arr.length; i++) {
		let word = arr[i];

		if (word.length < 3) arr[i] = word.toLowerCase();
		else {
			word = word[0].toUpperCase() + word.slice(1).toLowerCase();
			arr[i] = word;
		}
	}

	return arr.join(' ');
};
