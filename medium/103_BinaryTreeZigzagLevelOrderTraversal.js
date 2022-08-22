// PROBLEM LINK:
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

// EXPLANANTION:
// https://www.youtube.com/watch?v=D59kgpVCEUY&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=4

// STATEMENT
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// (i.e., from left to right, then right to left for the next level and alternate between).

// EXAMPLES
// Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: [[3], [20, 9], [15, 7]];

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const zigzagLevelOrder = root => {
	if (!root) return [];

	const queue = [root];
	const result = [];
	let count = 0;

	while (queue.length > 0) {
		let length = queue.length;
		const isEven = count % 2 === 0;

		if (isEven) result.push(queue.map(node => node.val));
		else result.push(queue.map(node => node.val).reverse());

		while (length--) {
			let node = queue.shift();

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		count++;
	}

	return result;
};
