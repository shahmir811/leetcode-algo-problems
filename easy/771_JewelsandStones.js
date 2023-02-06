// PROBLEM LINK:
// https://leetcode.com/problems/jewels-and-stones/

// STATEMENT
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you
// have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are
//  also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// EXAMPLES
// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

const numJewelsInStones = (jewels, stones) => {
	const obj = {};

	for (const jewel of jewels) {
		if (!obj[jewel]) obj[jewel] = true;
	}

	let count = 0;

	for (let i = 0; i < stones.length; i++) {
		let stone = stones[i];

		if (obj[stone]) count++;
	}

	return count;
};
