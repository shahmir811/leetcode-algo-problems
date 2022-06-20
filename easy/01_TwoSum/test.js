const twoSum = require('./index');

test('twoSum function exists', () => {
	expect(twoSum).toBeDefined();
});

test('Result of ([2, 7, 11, 15], 9) must be [0, 1]', () => {
	expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('Result of ([3, 2, 4], 6) must be [1, 2]', () => {
	expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('Result of ([3, 3], 6) must be [0, 1]', () => {
	expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
