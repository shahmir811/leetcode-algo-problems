// PROBLEM LINK:
// https://leetcode.com/problems/jump-game/

// EXPLANANTION:
// https://youtu.be/ckwPxNG9xeA

// STATEMENT
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in
// the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// EXAMPLES
// Example 1:
// Input: nums = [2, 3, 1, 1, 4];
// Output: true;

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const canJump = nums => {
	let target = nums.length - 1;

	for (let i = nums.length - 1; i >= 0; i--) {
		const sum = i + nums[i];
		if (sum >= target) target = i;
	}

	return target === 0;
};
