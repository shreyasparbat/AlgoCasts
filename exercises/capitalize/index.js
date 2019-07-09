// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let returnString = ''
    for (let word of str.split(' ')) {
        returnString += word.substring(0, 1).toUpperCase() + word.substring(1, word.length) + ' '
    }
    return returnString.substring(0, returnString.length - 1)
}

module.exports = capitalize;
