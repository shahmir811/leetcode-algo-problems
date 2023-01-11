// PROBLEM LINK:
// https://leetcode.com/problems/shuffle-the-array/

// STATEMENT
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// EXAMPLES
// Example 1:
// Input: (nums = [2, 5, 1, 3, 4, 7]), (n = 3);
// Output: [2, 3, 5, 4, 1, 7];

// Example 2:
// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// Example 3:
// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const shuffle = (nums, n) => {
	const firstNum = JSON.parse(JSON.stringify(nums)).slice(0, n);
	const secondNum = JSON.parse(JSON.stringify(nums)).slice(n);

	const result = [];

	for (let i = 0; i < firstNum.length; i++) {
		result.push(firstNum[i], secondNum[i]);
	}

	return result;
};
