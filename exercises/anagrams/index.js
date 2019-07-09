// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let regex = /[^A-Za-z0-9]/g
    stringA = stringA.replace(regex, '').toLowerCase()
    stringB = stringB.replace(regex, '').toLowerCase()
    // missed edge case!!! Always think of these!
    if (stringA.length !== stringB.length) {
        return false
    }
    let mapA = {}
    for (let char of stringA) {
        mapA[char] = char in mapA ? mapA[char] + 1 : 1
    }
    let flag = false
    let mapB = {}
    for (let char of stringB) {
        freqA = mapA[char]
        if (!(freqA)) {
            return false
        } else {
            mapB[char] = char in mapB ? mapB[char] + 1 : 1
            flag = freqA === mapB[char] ? true : false
            console.log(mapB[char])
        }
    }
    return flag
}

console.log(anagrams('helllo', 'hello'))

module.exports = anagrams;
