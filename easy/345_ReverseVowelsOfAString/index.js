// PROBLEM LINK:
// https://leetcode.com/problems/reverse-vowels-of-a-string/

// STATEMENT
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// EXAMPLES
// Example 1:
// Input: s = 'hello';
// Output: 'holle';

// Example 2:
// Input: s = 'leetcode';
// Output: 'leotcede';

const swap = (arr, start, end) => {
	const temp = arr[start];
	arr[start] = arr[end];
	arr[end] = temp;
};

const reverseVowels = s => {
	const vowels = {};

	for (const char of 'aeiouAEIOU') {
		vowels[char] = true;
	}

	const characters = s.split('');
	let left = 0;
	let right = characters.length - 1;

	while (left < right) {
		while (left < right && !(s[left] in vowels)) {
			left++;
		}

		while (left < right && !(s[right] in vowels)) {
			right--;
		}

		// SWAP
		swap(characters, left, right);
		left++;
		right--;
	}

	return characters.join('');
};
