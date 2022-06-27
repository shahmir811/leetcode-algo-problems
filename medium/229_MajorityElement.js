// PROBLEM LINK:
// https://leetcode.com/problems/majority-element-ii/

// STATEMENT
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// EXAMPLES
// Example 1:
// Input: nums = [3,2,3]
// Output: [3]

// Example 2:
// Input: nums = [1]
// Output: [1]

// Example 3:
// Input: nums = [1,2]
// Output: [1,2]

const getFreq = (nums, count) => {
	const freq = (count / nums.length) * 100;
	return parseFloat(freq.toFixed(2));
};

const majorityElement = nums => {
	const resultObj = {};
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (!resultObj[num]) {
			resultObj[num] = {
				value: 1,
				freq: 0,
			};
		} else {
			resultObj[num].value += 1;
		}
	}

	for (const key in resultObj) {
		const obj = resultObj[key];
		obj.freq = getFreq(nums, obj.value);
	}

	for (const key in resultObj) {
		const obj = resultObj[key];

		if (obj.freq > 33.33) {
			result.push(parseInt(key));
		}
	}
	return result;
};
