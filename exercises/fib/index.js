// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Recursion + memoization solution
// ------
function memoize(fn) {
    let cache = {}
    return function (...args) {
        if (cache[args]) {
            return cache[args]
        }
        let result = fn.apply(this, args)
        cache[args] = result
        return result
    }
}

function slowFib(n) {
    if (n < 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

const fib = memoize(slowFib)

// Iterative solution
// --------
// function fib(n) {
//     let this_ = 1
//     let prev = 0
//     for (let i = 1; i < n; i++) {
//         let temp = this_
//         this_ += prev
//         prev = temp
//     }
//     return n ? this_ : prev
// }

console.log(fib(0) === 0)

module.exports = fib;
