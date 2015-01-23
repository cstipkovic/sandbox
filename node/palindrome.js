// testado utilizando Node.js
// Utlizando modo iterativo
function isPalindrome(s) {
    var i = s.length - 1,
        k = 0;

    while (i > k) {
        if (s.charAt(k++) !== s.charAt(i--)) {
            return false;
        }
    }

    return true;
}


// Test de performance

strTest = "abcdcba";

function perfTest() {
    console.time(0)
    for (var i = 0; i < 1000; i++) {
        isPalindrome(strTest);
    }
    console.timeEnd(0)
}

perfTest();
console.log(isPalindrome(strTest));
