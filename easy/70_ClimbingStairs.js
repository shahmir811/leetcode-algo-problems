// PROBLEM LINK:
// https://leetcode.com/problems/climbing-stairs/

// EXPLANANTION:
// https://youtu.be/Ifek5h5VqJw

// STATEMENT
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// EXAMPLES
// Example 1:
// Input: n = 2;
// Output: 2;

// Example 2:
// Input: n = 3
// Output: 3

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const climbStairs = n => {
	const steps = [0, 1, 2];

	for (let i = 3; i <= n; i++) {
		steps[i] = steps[i - 1] + steps[i - 2];
	}

	return steps[n];
};
