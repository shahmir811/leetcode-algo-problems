// PROBLEM LINK:
// https://leetcode.com/problems/binary-tree-paths/

// EXPLANANTION:
// https://www.youtube.com/watch?v=MVbXgZHEdwU

// STATEMENT
// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// EXAMPLES
// Example 1:
// Input: root = [1, 2, 3, null, 5];
// Output: ['1->2->5', '1->3'];

// Example 2:
// Input: root = [1]
// Output: ["1"]

// Following Code has:
// Time Complexity: O(n)
// Space Complexity: O(n)

const binaryTreePaths = root => {
	if (!root) return [];

	const result = [];

	const traverse = (node, currentPath) => {
		currentPath += node.val;

		const leafNode = node.left === null && node.right === null;

		if (leafNode) {
			result.push(currentPath);
		}

		if (node.left) traverse(node.left, currentPath + '->');
		if (node.right) traverse(node.right, currentPath + '->');
	};

	traverse(root, '');
	return result;
};
