// PROBLEM LINK:
// https://leetcode.com/problems/deepest-leaves-sum/

// EXPLANANTION:
// https://www.youtube.com/watch?v=Z0q319GTuDE

// STATEMENT
//

// EXAMPLES
// Example 1:
// Input: root = [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8];
// Output: 15;

// Example 2:
// Input: root = [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5];
// Output: 19;

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(h) - Tree Height

const deepestLeavesSum = root => {
	let sum = 0;
	let deepestLevel = 0;

	const traverse = (root, level) => {
		if (!root) return;

		if (level === deepestLevel) {
			sum += root.val;
		} else if (level > deepestLevel) {
			deepestLevel = level;
			sum = root.val;
		}

		traverse(root.left, level + 1);
		traverse(root.right, level + 1);
	};

	traverse(root, 0);

	return sum;
};
