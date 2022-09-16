// PROBLEM LINK:
// https://leetcode.com/problems/find-the-duplicate-number/

// EXPLANANTION:
// https://www.youtube.com/watch?v=-KqZ0Miukws&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=5

// STATEMENT
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.

// EXAMPLES
// Example 1:
// Input: nums = [1, 3, 4, 2, 2];
// Output: 2;

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(1)

const findDuplicate = nums => {
	let slow = 0;
	let fast = 0;

	while (true) {
		fast = nums[nums[fast]];
		slow = nums[slow];

		if (slow === fast) {
			let pointer = 0;

			while (pointer !== slow) {
				pointer = nums[pointer];
				slow = nums[slow];
			}

			return pointer;
		}
	}
};
