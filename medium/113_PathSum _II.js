// PROBLEM LINK:
// https://leetcode.com/problems/path-sum-ii/

// EXPLANANTION:
// https://www.youtube.com/watch?v=4-IHOsNSdLE&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=8

// STATEMENT
// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node
// values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

// EXAMPLES
// Example 1:
// Input: (root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), (targetSum = 22);
// Output: [
// 	[5, 4, 11, 2],
// 	[5, 8, 4, 5],
// ];

// Example 2:
// Input: (root = [1, 2, 3]), (targetSum = 5);
// Output: [];

// Following Code has:
// Time Complexity: O(n^2)
// Space Complexity: O(n^2)

const pathSum = (root, targetSum) => {
	if (!root) return [];

	const paths = [];

	const traverse = (node, sum, slate = []) => {
		const leafNode = node.left === null && node.right === null;

		if (leafNode) {
			if (sum === node.val) {
				slate.push(node.val);
				paths.push(slate.slice());
				slate.pop();
			}
		}

		if (node.left) {
			slate.push(node.val);
			traverse(node.left, sum - node.val, slate);
			slate.pop();
		}

		if (node.right) {
			slate.push(node.val);
			traverse(node.right, sum - node.val, slate);
			slate.pop();
		}
	};

	traverse(root, targetSum, []);
	return paths;
};
