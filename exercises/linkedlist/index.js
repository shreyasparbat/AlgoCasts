// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, nextNode=null) {
        this.data = data
        this.next = nextNode
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        let prevHead = this.head
        this.head = new Node(data, prevHead)
    }

    size() {
        if (!(this.head)) {
            return 0
        }
        let node = this.head
        let counter = 1
        while (node.next) {
            counter++
            node = node.next
        }
        return counter + 1
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head
        while (node.next) {
            node = node.next
        }
        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        this.head = this.head.next
    }

    removeLast() {
        let node = this.head
        let prevNode
        while (node.next) {
            prevNode = node
            node = node.next
        }
        prevNode.next = null
    }

    insertLast(data) {
        this.getLast().next = new Node(data)
    }

    getAt(index) {
        let node = this.head
        for (let i = 1; i <= index && node.next; i++) {
            node = node.next
        }
        return node
    }

    removeAt(index) {
        let node = this.head
        let prevNode
        let nextNode
        for (let i = 1; i <= index && node.next; i++) {
            prevNode = node
            node = node.next
            nextNode = node.next
        }
        prevNode.next = nextNode
    }

    insertAt(data, integer) {
        let node = this.head
        let prevNode
        for (let i = 1; i <= index && node.next; i++) {
            node = node.next
        }
        if (node.next) {
            let temp = node.next
            node.next = new Node(data)
            node.next.next = temp
        }
    }

    forEach(callback) {
        let node = this.head
        while (node) {
            callback(node)
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };
