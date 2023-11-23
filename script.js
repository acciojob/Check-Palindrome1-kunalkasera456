// complete the given function

function palindrome(str){
	let n = str.length;
	let start = 0;
	let end = n - 1;

	while(start < end) {
		if(str[start] == " ") {
			start++;
		}
		if (str[end] == " ") {
			end--;
		}
		if(str[start] != str[end]) return false;
	}
	return true;

}
module.exports = palindrome
