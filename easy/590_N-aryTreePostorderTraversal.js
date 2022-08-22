// PROBLEM LINK:
// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

// STATEMENT
// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal.
// Each group of children is separated by the null value (See examples)

// EXAMPLES
// Example 1:
// Input: root = [1, null, 3, 2, 4, null, 5, 6];
// Output: [5, 6, 3, 2, 4, 1];

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const postorder = root => {
	if (!root) return [];

	let current = root;
	const visited = [];

	const traverse = node => {
		for (const child of node.children) {
			traverse(child);
		}

		visited.push(node.val);
	};

	traverse(current);

	return visited;
};
