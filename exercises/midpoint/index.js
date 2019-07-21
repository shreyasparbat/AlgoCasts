// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }


// Slow is moving at half the pace, and hence must reach the midpoint
function midpoint(list) {
    let slow = list.getFirst()
    let fast = list.getFirst()
    while (fast.next) {
        fast = fast.next.next
        if (!(fast)) {
            return slow
        }
        slow = slow.next
    }
    return slow
}

module.exports = midpoint;
