// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data, left=null, right=null) {
        this.data = data
        this.left = left
        this.right = right
    }

    insert(data, node=this) {
        if (data < node.data) {
            if (node.left) {
                return this.insert(data, node.left)
            } else {
                node.left = new Node(data)
            }
        } else {
            if (node.right) {
                return this.insert(data, node.right)
            } else {
                node.right = new Node(data)
            }
        }
    }

    contains(data, node=this) {
        if (!(node)) {
            return null
        }
        if (data < node.data) {
            return this.contains(data, node.left)
        } else if (data === node.data) {
            return node
        } else {
            return this.contains(data, node.right)
        }
    }
}

module.exports = Node;
