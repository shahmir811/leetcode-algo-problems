// PROBLEM LINK:
// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

// STATEMENT
//

// EXAMPLES
// Example 1:
// Input: words = ["abba","baba","bbaa","cd","cd"]
// Output: ["abba","cd"]

// Example 2:
// Input: words = ['a', 'b', 'c', 'd', 'e'];
// Output: ['a', 'b', 'c', 'd', 'e'];

// Constraints:
// words consists of lowercase English letters.

const removeAnagrams = words => {
	let stack = [];

	let sortWord = word => word.split('').sort().join();

	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		stack.push(word);

		if (stack.length > 1 && sortWord(stack[stack.length - 1]) === sortWord(stack[stack.length - 2])) {
			stack.pop();
		}
	}

	return stack;
};
