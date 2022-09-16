// PROBLEM LINK:
// https://leetcode.com/problems/happy-number/

// EXPLANANTION:
// https://www.youtube.com/watch?v=CUoAon6Ef-g&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=4

const getNumSum = num => {
	let total = 0;

	while (num !== 0) {
		let lastDigit = num % 10; // 149 -> 9
		num = Math.floor(num / 10); // 149 ->14
		total += Math.pow(lastDigit, 2);
	}

	return total;
};

const isHappy = n => {
	let fast = n;
	let slow = n;

	while (true) {
		fast = getNumSum(getNumSum(fast));
		slow = getNumSum(slow);

		if (fast === slow) {
			return fast === 1;
		}
	}
};
