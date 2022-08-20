// PROBLEM LINK:
// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

// EXPLANANTION:
// https://www.youtube.com/watch?v=LqD3oD9I614&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=2

// STATEMENT
// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values.
// (i.e., from left to right, level by level from leaf to root).

// EXAMPLES
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const levelOrderBottom = root => {
	if (!root) return [];

	const queue = [root];
	const result = [];

	while (queue.length) {
		let length = queue.length;
		result.push(queue.map(node => node.val));

		while (length--) {
			let node = queue.shift();

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}

	return result.reverse();
};
