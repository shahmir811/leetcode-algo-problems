// PROBLEM LINK:
// https://leetcode.com/problems/can-place-flowers/

// EXPLANANTION:
// https://youtu.be/FQDIUuWeukk

// STATEMENT
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
// and an integer n, return if n new flowers can be planted in the flowerbed without violating
// the no-adjacent-flowers rule.

// EXAMPLES
// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const canPlaceFlowers = (flowerbed, n) => {
	let i = 0;

	while (i < flowerbed.length && n !== 0) {
		const condition = flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1;

		if (condition) {
			n--;
			i++;
		}

		i++;
	}

	return n === 0;
};
