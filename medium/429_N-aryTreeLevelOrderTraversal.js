// PROBLEM LINK:
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

// EXPLANANTION:
// https://www.youtube.com/watch?v=Op03-kw08sQ&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=5

// STATEMENT
// Given an n-ary tree, return the level order traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal,
// each group of children is separated by the null value

// EXAMPLES
// Example 1:
// Input: root = [1, null, 3, 2, 4, null, 5, 6];
// Output: [[1], [3, 2, 4], [5, 6]];

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const levelOrder = root => {
	if (!root) return [];

	const queue = [root];
	const result = [];

	while (queue.length > 0) {
		let length = queue.length;

		result.push(queue.map(node => node.val));

		while (length--) {
			let node = queue.shift();

			for (const child of node.children) {
				queue.push(child);
			}
		}
	}
	return result;
};
