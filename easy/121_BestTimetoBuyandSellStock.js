// PROBLEM LINK:
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// STATEMENT
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different
// day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// EXAMPLES
// Example 1:
// Input: prices = [7, 1, 5, 3, 6, 4];
// Output: 5;

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0

// Example 3:
// Input: prices = [2, 4, 1]
// Output: 2

const maxProfit = prices => {
	let maxProfit = 0;
	let cheapestPrice = prices[0];

	for (let i = 0; i < prices.length; i++) {
		const currentPrice = prices[i];

		if (currentPrice < cheapestPrice) cheapestPrice = currentPrice;

		const profit = currentPrice - cheapestPrice;
		maxProfit = Math.max(profit, maxProfit);
	}

	return maxProfit;
};
