// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    string = '';
    for (let i = str.length - 1; i>= 0; i--) {
        string += str[i];
    }
    return string;
}

// function reverse(str) {
//     string = '';
//     for (let char in str) {
//         string = char + string;
//     }
//     return string;
// }

module.exports = reverse;
