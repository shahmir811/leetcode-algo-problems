// PROBLEM LINK:
// https://leetcode.com/problems/intersection-of-two-arrays/

// EXPLANANTION:
// https://www.udemy.com/course/coding-interview-crash-course-for-web-developer-2020/learn/lecture/23052724#overview

// STATEMENT
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique and you may return the result in any order.

// EXAMPLES
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const intersection = (nums1, nums2) => {
	let n1 = new Set(nums1);
	let n2 = new Set(nums2);

	const result = [];

	n1.forEach(element => {
		if (n2.has(element)) result.push(element);
	});

	return result;
};
