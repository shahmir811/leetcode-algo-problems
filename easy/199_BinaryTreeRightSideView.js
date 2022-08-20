// PROBLEM LINK:
// https://leetcode.com/problems/binary-tree-right-side-view/

// EXPLANANTION:
// https://www.youtube.com/watch?v=RKPCF-hsOPY&list=PLrClazTqVpJlKREjzrExHF4znO9i-kXhz&index=4

// STATEMENT
// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

const rightSideView = root => {
	if (!root) return [];

	const queue = [root];
	const result = [];

	while (queue.length > 0) {
		let length = queue.length;
		let lastIndex = queue.length - 1;

		result.push(queue[lastIndex].val);

		while (length--) {
			let node = queue.shift();

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}

	return result;
};
