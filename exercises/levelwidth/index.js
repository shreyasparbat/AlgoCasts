// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let currentLevel = [root]
    let nextLevel = []
    let widths = []
    while (currentLevel.length > 0) {
        widths.push(currentLevel.length)
        for (let node of currentLevel) {
            nextLevel = nextLevel.concat(node.children)
        }
        currentLevel = []
        // Deep copy
        for (let node of nextLevel) {
            currentLevel.push(node)
        }
        nextLevel = []
    }
    return widths
}

module.exports = levelWidth;
