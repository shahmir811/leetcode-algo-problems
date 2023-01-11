// PROBLEM LINK:
// https://leetcode.com/problems/roman-to-integer/

// EXPLANANTION:
// https://youtu.be/CwhpILAlfjg

// STATEMENT
// Roman to Integer Conversion

// Following Code has:
// Time Complexity: O(1)
// Space Complexity: O(1)

const romanToInt = s => {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let total = 0;

	for (let i = 0; i < s.length; i++) {
		let current = s[i];
		let next = s[i + 1];

		if (map[current] < map[next]) {
			total -= map[current];
		} else {
			total += map[current];
		}
	}

	return total;
};
