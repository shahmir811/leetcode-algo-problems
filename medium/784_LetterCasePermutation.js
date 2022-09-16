// PROBLEM LINK:
// https://leetcode.com/problems/letter-case-permutation/

// EXPLANANTION:
// https://www.youtube.com/watch?v=8ncNSmLVB4E&list=PLrClazTqVpJkZSFk6mRw5e0BOtOG4-7El&index=1

// STATEMENT
// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
// Return a list of all possible strings we could create. Return the output in any order.

// EXAMPLES
// Example 1:
// Input: s = 'a1b2';
// Output: ['a1b2', 'a1B2', 'A1b2', 'A1B2'];

// Example 2:
// Input: s = "3z4"
// Output: ["3z4","3Z4"]

// Following Code has:
// Time Complexity: O(2^n * n)
// Space Complexity: O(2^n * n)

const letterCasePermutation = s => {
	const result = [];

	const dfs = (i, s, slate) => {
		//Base case

		if (i === s.length) {
			result.push(slate.join(''));
			return;
		}

		let char = s[i];

		// Check if the char is not a number
		if (!Number.isInteger(parseInt(char))) {
			// Upper case
			slate.push(char.toUpperCase());
			dfs(i + 1, s, slate);
			slate.pop();

			// Lower case
			slate.push(char.toLowerCase());
			dfs(i + 1, s, slate);
			slate.pop();
		} else {
			slate.push(char);
			dfs(i + 1, s, slate);
			slate.pop();
		}
	};

	dfs(0, s, []);

	return result;
};
