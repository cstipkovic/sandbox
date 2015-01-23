function isPalindrome(str) {
    var i = str.length - 1;
    var k = 0;

    while (i > k) {
      if (str.charAt(k++) !== str.charAt(i--)) return false;
    }

    return true;
}
