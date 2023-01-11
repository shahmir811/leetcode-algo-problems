// PROBLEM LINK:
// https://leetcode.com/problems/richest-customer-wealth/

// STATEMENT:
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​
// customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.

// EXAMPLES
// Example 1:
// Input: accounts = [
// 	[1, 2, 3],
// 	[3, 2, 1],
// ];
// Output: 6;

const maximumWealth = accounts => {
	let max = 0;

	for (let i = 0; i < accounts.length; i++) {
		let accountMax = 0;
		let arr = accounts[i];

		accountMax = arr.reduce((accu, amount) => accu + amount, 0);
		max = Math.max(max, accountMax);
	}

	return max;
};
