// PROBLEM LINK:
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// STATEMENT
// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal.
// Each group of children is separated by the null value (See examples)

// EXAMPLES
// Example 1:
// Input: root = [1, null, 3, 2, 4, null, 5, 6];
// Output: [1, 3, 5, 6, 2, 4];

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const preorder = root => {
	if (!root) return [];

	let current = root;
	const visited = [];

	const traverse = node => {
		visited.push(node.val);

		for (const child of node.children) {
			traverse(child);
		}
	};

	traverse(current);

	return visited;
};
