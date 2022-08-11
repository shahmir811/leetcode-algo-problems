// PROBLEM LINK:
// https://leetcode.com/problems/design-hashset/

// STATEMENT
// Design a HashSet without using any built-in hash table libraries.
// Implement MyHashSet class:

// a - void add(key) Inserts the value key into the HashSet.
// b - bool contains(key) Returns whether the value key exists in the HashSet or not.
// c - void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

const MyHashSet = () => {
	this.data = {};
};

MyHashSet.prototype.add = function (key) {
	this.data[key] = true;
};

MyHashSet.prototype.remove = function (key) {
	delete this.data[key];
};

MyHashSet.prototype.contains = function (key) {
	return !!this.data[key];
};
