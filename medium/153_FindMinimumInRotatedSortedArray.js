// PROBLEM LINK:
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// EXPLANANTION:
//

// STATEMENT
//

// EXAMPLES
// Example 1:

// Following Code has:
// Time Complexity: O(log n)
// Space Complexity: O(1)

const findMin = nums => {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[right] < nums[mid]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	return nums[left];
};
