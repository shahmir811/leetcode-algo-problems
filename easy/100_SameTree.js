// PROBLEM LINK:
// https://leetcode.com/problems/same-tree/

// EXPLANANTION:
// https://www.youtube.com/watch?v=b3Gt9UZ_Ufw&list=PL2HJG3tFqkg-y9FdMiqabm1XJqFO7riuJ&index=9

// STATEMENT
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// EXAMPLES
// Example 1:

// Following Code has:
// Time Complexity: O(p + q) // p and q are two separate trees
// Space Complexity: O(1)

const isSameTree = (p, q) => {
	if (p === null && q === null) return true;
	if (p === null || q === null) return false;

	if (p.val === q.val) {
		return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
	}

	return false;
};
