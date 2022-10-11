// PROBLEM LINK:
// https://leetcode.com/problems/valid-palindrome-ii/

// EXPLANANTION:
// https://youtu.be/tPtuwzTJEJY

// STATEMENT
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// EXAMPLES
// Example 1:
// Input: s = "aba"
// Output: true

// Example 2:
// Input: s = "abca"
// Output: true

// Example 3:
// Input: s = "abc"
// Output: false

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const validPalindrome = s => {
	let left = 0;
	let right = s.length - 1;

	//
};

const isPal = (s, left, right) => {
	while (left < right) {
		if (s[left] !== s[right]) {
			return false;
		}

		left++;
		right--;
	}

	return true;
};
