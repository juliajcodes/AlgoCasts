// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // 🔶 using array reverse feature
    // return str.split('').reverse().join('');

    // 🔶 looping
    // let reversed = '';
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;

    // 🔶 using reduce
    str.split('').reduce(() => {}, '');
}

module.exports = reverse;
