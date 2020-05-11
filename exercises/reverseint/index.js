// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // 🔶 reverse
    pos = Math.abs(n); // makes number without negative
    let rev = pos.toString().split('').reverse().join('');
    return rev * Math.sign(n); // adds negative back
}

module.exports = reverseInt;
