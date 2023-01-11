// PROBLEM LINK:
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// EXPLANANTION:
// https://youtu.be/MBxm3Om7y3U

// STATEMENT
// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two
// adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

// EXAMPLES
// Example 1:
// Input: s = 'abbaca';
// Output: 'ca';

// Example 2:
// Input: s = "azxxzy"
// Output: "ay"

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const removeDuplicates = s => {
	let stack = [];

	for (const char of s) {
		const lastIndex = stack.length - 1;

		if (stack[lastIndex] === char) stack.pop();
		else stack.push(char);
	}

	return stack.join('');
};
