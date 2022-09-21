// PROBLEM LINK:
// https://leetcode.com/problems/fibonacci-number/

// EXPLANANTION:
// https://www.youtube.com/watch?v=HvZT1ff_InY&list=PLrClazTqVpJkZSFk6mRw5e0BOtOG4-7El&index=13

// STATEMENT
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones,

// EXAMPLES
// Example 1:
// Input: n = 2;
// Output: 1;

// Example 2:
// Input: n = 3
// Output: 2

// Example 3:
// Input: n = 4
// Output: 3

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const fib = n => {
	if (n < 2) return 1;

	return fib(n - 1) + fib(n - 2);
};
