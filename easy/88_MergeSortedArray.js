// PROBLEM LINK:
// https://leetcode.com/problems/merge-sorted-array/

// STATEMENT
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// EXAMPLES
// Example 1:
// Input: (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
// Output: [1, 2, 2, 3, 5, 6];

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// Example 3:
// Input: (nums1 = [0]), (m = 0), (nums2 = [1]), (n = 1);
// Output: [1];

// Following code has:
// Time complexity: O(n)
// Space complexity: O(1)

const merge = (nums1, m, nums2, n) => {
	let i = nums1.length - 1;
	let first = m - 1;
	let second = n - 1;

	while (second >= 0) {
		let firstVal = nums1[first];
		let secondVal = nums2[second];

		if (firstVal > secondVal) {
			nums1[i] = firstVal;
			i--;
			first--;
		} else {
			nums1[i] = secondVal;
			i--;
			second--;
		}
	}

	return nums1;
};
