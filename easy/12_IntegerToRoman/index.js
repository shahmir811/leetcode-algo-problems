const intToRoman = num => {
	// Below Object key value pair must be like below.
	// Donot change it or reorder it
	const romanToNum = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};

	let roman = '';

	for (const key in romanToNum) {
		while (num >= romanToNum[key]) {
			roman += key;
			num -= romanToNum[key];
		}
	}

	return roman;
};
