// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = []
    }

    add(element) {
        for (let i = this.data.length; i > 0; i--) {
            this.data[i] = this.data[i-1]
        }
        this.data[0] = element
    }

    remove() {
        let element = this.data[this.data.length - 1]
        this.data = this.data.slice(0, this.data.length - 1)
        return element
    }
}

module.exports = Queue;
