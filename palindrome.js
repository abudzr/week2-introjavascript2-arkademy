function checkPalindrome(str) {
    str = str.toLowerCase();
    let x = str.length;
    for (let i = 0; i < Math.round(x / 2); i++) {
        if (str[i] !== str[x - 1 - i]) {
            return console.log('bukan palindrome');
        }
    }
    return console.log('palindrome');
}
checkPalindrome('Malam');
checkPalindrome('abba');
checkPalindrome('abcba');
checkPalindrome('abudzar');
checkPalindrome('malam');