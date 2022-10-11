// PROBLEM LINK:
// https://leetcode.com/problems/find-the-difference-of-two-arrays/

// EXPLANANTION:
//

// STATEMENT
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
//    answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
//    answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// EXAMPLES
// Example 1:
// Input: (nums1 = [1, 2, 3]), (nums2 = [2, 4, 6]);
// Output: [
// 	[1, 3],
// 	[4, 6],
// ];

// Example 2:
// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const findDifference = (nums1, nums2) => {
	let output = [[], []];

	let num1Set = new Set(nums1);
	let num2Set = new Set(nums2);

	num1Set.forEach(x => {
		if (num2Set.has(x)) {
			num1Set.delete(x);
			num2Set.delete(x);
		}
	});

	output[0] = Array.from(num1Set);
	output[1] = Array.from(num2Set);

	return output;
};
