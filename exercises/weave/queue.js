// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

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

  peek() {
    return this.data[this.data.length - 1]
  }
}

module.exports = Queue;
