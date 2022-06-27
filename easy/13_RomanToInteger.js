// PROBLEM LINK:
// https://leetcode.com/problems/roman-to-integer/

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

	let result = 0;
	let length = s.length;
	let i = 0;

	while (i < length) {
		const current = s[i];
		const next = s[i + 1];

		if (map[next] > map[current]) {
			const number = map[next] - map[current];
			result += number;
			i += 2;
		} else {
			result += map[current];
			i++;
		}
	}
	return result;
};
