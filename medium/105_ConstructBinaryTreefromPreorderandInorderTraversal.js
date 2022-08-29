// PROBLEM LINK:
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// EXPLANANTION:
// https://www.youtube.com/watch?v=gadH7h5B2dc&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=9&t=15s

// STATEMENT
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree
// and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// EXAMPLES
// Example 1:
// Input: (preorder = [3, 9, 20, 15, 7]), (inorder = [9, 3, 15, 20, 7]);
// Output: [3, 9, 20, null, null, 15, 7];

// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const buildTree = (preorder, inorder) => {
	if (!preorder.length || !inorder.length) return null;

	let root = new TreeNode(preorder[0]);
	let mid = inorder.indexOf(root.val);

	root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
	root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

	return root;
};
