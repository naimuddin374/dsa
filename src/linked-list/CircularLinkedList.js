class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //   Insert list
  insert(data) {
    const newNode = new Node(data);
    this.size++;

    // If the list is empty
    if (this.size === 1) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    // If the list is not empty
    let current = this.head;

    // Traverse the list until find the head
    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = this.head;
  }

  // Remove list
  remove(data) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let prev = null;

    // If only have one data
    if (current.data === data) {
      if (this.size === 1) {
        this.head = null;
      } else {
        // Find last node to update it's next pointer
        let last = this.head;
        while (last.next !== this.head) {
          last = last.next;
        }
        this.head = this.head.next;
        last.next = this.head;
      }

      this.size--;
      return true;
    }

    // Search for data in the other nodes
    do {
      prev = current;
      current = current.next;

      if (current.data === data) {
        prev.next = current.next;
        this.size--;
        return true;
      }
    } while (current !== this.head);

    return false;
  }
}

const circularLink = new CircularLinkedList();
circularLink.insert(10);
circularLink.insert(20);
circularLink.insert(30);
circularLink.insert(40);
circularLink.remove(20);
console.log("remove=", circularLink);
