// PROBLEM LINK:
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// EXPLANANTION:
// https://www.youtube.com/watch?v=T6bVlhwscuM

// STATEMENT
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and
// you may return the result in any order.

// EXAMPLES
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const intersect = (nums1, nums2) => {
	const result = [];
	const obj = {};

	for (const element of nums1) {
		obj[element] = ++obj[element] || 1;
	}

	for (const element of nums2) {
		if (obj[element] > 0) result.push(element);
		obj[element]--;
	}

	return result;
};
