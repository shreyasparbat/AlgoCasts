// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let iMax = n - 1
    let jMax = n - 1
    let iMin = 1
    let jMin = 0
    let elem = 1
    let array = [...Array(n)].map(e => Array(n))
    let i = 0
    let j = 0
    while (elem <= n * n) {
        // Right and Down
        while (j <= jMax) {
            array[i][j] = elem
            elem++
            j++
        }
        j--
        i++
        while (i <= iMax) {
            array[i][j] = elem
            elem++
            i++
        }
        i--
        j--

        // Left and up
        while (j >= jMin) {
            array[i][j] = elem
            elem++
            j--
        }
        j++
        i--
        while(i >= iMin) {
            array[i][j] = elem
            elem++
            i--
        }
        i++
        j++

        // Updating mins and maxs
        jMax--
        iMax--
        jMin++
        iMin++
    }
    return array
}

console.log(matrix(5))

// Learning: next time, don't rely on console log to see whether the changes you make will
// have the desired effect and nudge you closer to the right answer! Solve on whiteboard
// using memory state diagrams
module.exports = matrix;
