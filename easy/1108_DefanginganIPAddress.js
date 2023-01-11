// PROBLEM LINK:
// https://leetcode.com/problems/defanging-an-ip-address/

// EXPLANANTION:
//

// STATEMENT
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

// EXAMPLES
// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// Following Code has:
// Time Complexity: O()
// Space Complexity: O()

const defangIPaddr = address => {
	return address.split('.').join('[.]');
};
