// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function stepsRecursive(n, i = 1, total = n) {
    if (n === 0) {
        return 'done'
    }
    console.log('#'.repeat(i) + ' '.repeat(total - i))
    return steps(n - 1, i + 1, total)
}

module.exports = steps;
