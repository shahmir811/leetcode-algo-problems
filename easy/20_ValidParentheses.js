// PROBLEM LINK:
// https://leetcode.com/problems/valid-parentheses/

// STATEMENT
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is
// valid. An input string is valid if:
// 1 - Open brackets must be closed by the same type of brackets.
// 2 - Open brackets must be closed in the correct order.

// EXAMPLES
// Example 1:
// Input: s = '()';
// Output: true;

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// s consists of parentheses only '()[]{}'.

// Following code has:
// Time complexity: O(n)
// Space complexity: O(n)

const isValid = s => {
	let stack = [];
	let pairsHashMap = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	for (let i = 0; i < s.length; i++) {
		let char = s[i];

		if (pairsHashMap[char]) stack.push(char);
		else if (pairsHashMap[stack.pop()] !== char) return false;
	}
	return stack.length === 0;
};
