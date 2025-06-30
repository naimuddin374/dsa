const DEFAULT_CAPACITY = 10;

class CustomArray {
  constructor(capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.length = 0;
    this.array = new Array(capacity);
  }

  // Constant time + space
  // O(1) time complexity, O(1) space complexity
  push(value) {
    if (this.length >= this.capacity) {
      throw new Error("Array is full");
    }
    // console.log(`Pushing value ${value} at index ${this.length}`);

    this.array[this.length] = value;
    this.length++;
  }

  // Linear Time + Space
  // O(n) time complexity, O(n) space complexity
  // Insert at index
  // O(n) time complexity, O(1) space complexity
  // Insert at the end
  // O(1) time complexity, O(1) space complexity
  // Insert at the beginning
  // O(n) time complexity, O(1) space complexity
  insert(index, value) {
    this.#checkIndex(index);

    // console.log(`Inserting value ${value} at index ${index}`);

    // Last item
    if (index === this.length) {
      return this.push(value);
    }

    // Others
    for (let i = this.length; i > index; i--) {
      this.array[i] = this.array[i - 1];
    }
    this.array[index] = value;
    this.length++;
  }

  // Linear Time O(n) + Space complexity O(n)
  copy() {
    const newArray = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i];
    }
    return newArray;
  }

  // Remove at index
  // O(n) time complexity, O(1) space complexity
  // Remove last item
  // O(1) time complexity, O(1) space complexity
  remove(index) {
    this.#checkIndex(index);

    const element = this.array[index];

    if (index === this.length - 1) {
      this.array[index] = undefined;
      this.length--;
      return element;
    }

    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
      console.log(this.array);
    }

    this.length--;
    return element;
  }

  #checkIndex(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }
  }
}

const customArray = new CustomArray(10);
customArray.push(1);
customArray.push(2);
customArray.push(3);
customArray.push(4);
customArray.push(5);

// console.log(customArray.length, customArray.array);

customArray.insert(1, 99);
customArray.insert(0, 100);

console.log(customArray.length, customArray.array);
customArray.remove(customArray.length - 1);
console.log(customArray.length, customArray.array);

// Output:
// 100, 1, 99, 2, 3, 4, 5
// 100, 1, 99, 2, 3, 4, 5
