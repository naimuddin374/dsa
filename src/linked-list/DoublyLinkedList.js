class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    this.size++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    return this;
  }

  prepend(data) {
    const newNode = new Node(data);
    this.size++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  remove(data) {
    if (!this.head) {
      return false;
    }

    let current = this.head;

    while (current) {
      if (current.data !== data) {
        current = current.next;
        continue;
      }

      // If there is only one node
      if (current === this.head && current === this.tail) {
        this.size--;
        this.head = null;
        this.tail = null;
        return true;
      }

      // If want to remove first node
      if (current === this.head) {
        this.head = current.next;
        this.head.prev = null;
        this.size--;
        return true;
      }

      // If want to remove last node
      if (current === this.tail) {
        this.tail = current.prev;
        this.tail.next = null;
        this.size--;
        return true;
      }

      // If want to remove middle any node
      current.prev.next = current.next;
      current.next.prev = current.prev;
      this.size--;
      return true;
    }
    return false;
  }
}

const doublyLink = new DoublyLinkedList();
doublyLink.append(10);
doublyLink.append(20);
doublyLink.append(30);

doublyLink.prepend(5);

doublyLink.remove(10);
console.log("doublyLink=", doublyLink);
