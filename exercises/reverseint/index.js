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
    is_negative = n < 0 ? true : false
    n = is_negative ? n * -1 : n
    reversed = 0
    for (let i = 10; n >= 10;) {
        reversed += (n % 10)
        reversed *= 10
        n = Math.floor(n / i)
    }
    reversed += n
    return is_negative ? reversed * -1 : reversed
}

module.exports = reverseInt;
