// PROBLEM LINK:
// https://leetcode.com/problems/top-k-frequent-elements/description/

// EXPLANANTION:
// https://www.youtube.com/watch?v=NoGoc5QmLxs

// STATEMENT
// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

// EXAMPLES
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Following Code has:
// Time Complexity: O(n + k)
// Space Complexity: O(n + k)

// Constraints:
//  Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

const topKFrequent = (nums, k) => {
	const obj = {};

	for (const element of nums) {
		obj[element] = ++obj[element] || 1;
	}

	const bucket = [];

	for (let i = 0; i <= nums.length; i++) {
		bucket.push([]);
	}

	for (const key in obj) {
		const number = obj[key];
		bucket[number].push(key);
	}

	let result = [];

	// start for loop in desc order
	for (let i = bucket.length - 1; i >= 0; i--) {
		if (bucket[i].length === 0) continue;
		else {
			result = [...result, ...bucket[i]]; // similar to result.push(...bucket[i])
		}
	}

	return result.slice(0, k);
};
