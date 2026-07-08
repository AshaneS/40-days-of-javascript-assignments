function isPalindrome(str) {
  for (let i = 0; i <= Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      console.log("string is not a palindrome");
      return;
    }
  }
  console.log("string is a palindrome");
}

isPalindrome("noon");
