//Objective is to see whether a linked list has a cycle.

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(1)
head.next.next.next.next = new Node(2)


//O(n) solution that uses a hashset to keep track of the nodes.
//If it appears again, there is a cycle.

let set = new Set()
    
let curr = head
while (curr) {
    if (set.has(curr)) {
        return true
    } else {
        set.add(curr)
    }
    curr = curr.next
}
    
return false