// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // 🔶 using reverse
    // let revStr = str.split('').reverse().join('');
    // return revStr === str;

    // 🔶 alternate while using every
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;
