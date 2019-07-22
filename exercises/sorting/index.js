// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

}

function selectionSort(arr) {

}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }
    mid = arr.length / 2
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)))
}

function merge(left, right) {
    let results = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    return results.concat(left.concat(right))
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
