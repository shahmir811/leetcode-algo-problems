// PROBLEM LINK:
// https://leetcode.com/problems/pascals-triangle/

// EXPLANANTION:
// https://www.youtube.com/watch?v=iakcznipu1M&list=PL2HJG3tFqkg-y9FdMiqabm1XJqFO7riuJ&index=3

// STATEMENT
// Given an integer numRows, return the first numRows of Pascal's triangle.

// EXAMPLES
// Example 1:
// Input: numRows = 5;
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

// Example 2:
// Input: numRows = 1;
// Output: [[1]];

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const generate = numRows => {
	let result = [];

	if (numRows >= 1) result.push([1]);
	if (numRows >= 2) result.push([1, 1]);

	for (let i = 2; i < numRows; i++) {
		let first = 1;
		let last = 1;

		let prevArr = result[i - 1];

		if (numRows === 2) result.push([first, first + last, last]);
		else {
			let left = 0;
			let right = 1;
			const add = [];

			while (right < prevArr.length) {
				add.push(prevArr[left] + prevArr[right]); //
				left++;
				right++;
			}

			result.push([first, ...add, last]);
		}
	}

	return result;
};
