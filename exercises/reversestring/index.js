// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    string = '';
    for (var i = str.lenght - 1; i >= 0; i--) {
        string += str[i];
        console.log(str[i] + '----')
    }
    return string;
}

module.exports = reverse;
