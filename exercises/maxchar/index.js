// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    chars = str.split('')
    let maxChar = chars[0]
    let maxCount = 0
    let record = {}
    chars.forEach(char => {
        console.log(char)
        if (char in record) {
            record[char] += 1
        } else {
            record[char] = 1
        }
        if (record[char] > maxCount) {
            maxCount = record[char]
            maxChar = char
        }
    })
    return maxChar
}

module.exports = maxChar;
