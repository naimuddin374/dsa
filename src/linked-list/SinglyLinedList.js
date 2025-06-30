// const head = new Node(1);
// const node2 = new Node(2);
// head.next = node2;

// const node3 = new Node(3);
// node2.next = node3;

// console.log(JSON.stringify(head, null, 2));

// let current = head;
// while (current) {
//   console.log(current.data);
//   current = current.next;
// }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // O(n) time complexity, O(1) space complexity
  append(data) {
    const newNode = new Node(data);
    this.size++;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // O(1) time complexity, O(1) space complexity
  prepend(data) {
    const newNode = new Node(data);
    this.size++;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  // O(n) time complexity, O(1) space complexity
  insert(index, data) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.size) {
      this.append(data);
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    const newNode = new Node(data);
    this.size++;
    newNode.next = current;
    previous.next = newNode;
  }

  toString() {
    let current = this.head;
    let result = "";

    while (current) {
      const arrow = current.next ? " -> " : "";

      result += current.data + arrow;
      current = current.next;
    }

    return result;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.prepend(10);
singlyLinkedList.prepend(20);
singlyLinkedList.prepend(30);

singlyLinkedList.append(40);
singlyLinkedList.append(50);
singlyLinkedList.append(60);

singlyLinkedList.insert(3, 35);
singlyLinkedList.insert(5, 45);
console.log(singlyLinkedList.toString()); // 30 -> 20 -> 10 -> 40 -> 50 -> 60
