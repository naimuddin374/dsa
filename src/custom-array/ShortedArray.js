const DEFAULT_SIZE = 10;

class ShortedArray {
  constructor(size = DEFAULT_SIZE) {
    this.size = size;
    this.length = 0;
    this.array = new Array(size);
  }

  #resize(newSize) {
    if (newSize === this.size) return;

    const newArray = new Array(newSize);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
    this.size = newSize;
  }

  #doubleSize() {
    this.size *= 2;
    return this.#resize(this.size);
  }

  #halfSize() {
    if (this.size / 2 < this.length) return;

    this.size /= 2;
    return this.#resize(this.size);
  }

  insert(value) {
    if (this.length >= this.size) {
      this.#doubleSize();
    }

    for (let i = this.length; i > 0; i--) {
      if (this.array[i - 1] <= value) {
        this.array[i] = value;
        this.length++;
        return this.array;
      }

      this.array[i] = this.array[i - 1];
    }
    this.array[0] = value;
    this.length++;
  }

  #checkIndex(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }
  }

  remove(index) {
    this.#checkIndex(index);

    const element = this.array[index];
    for (let i = index; i < this.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.length--;

    if (this.length < this.size / 2) {
      this.#halfSize();
    }

    return element;
  }

  get(index) {
    this.#checkIndex(index);
    return this.array[index];
  }

  clear() {
    this.array = new Array(DEFAULT_SIZE);
    this.size = DEFAULT_SIZE;
    this.length = 0;
  }

  toArray() {
    return this.array.slice(0, this.length);
  }

  toString() {
    return this.array.slice(0, this.length).join(", ");
  }

  search(value) {
    let left = 0;
    let right = this.length - 1;

    while (
      left <= right &&
      this.array[left] <= value &&
      this.array[right] >= value
    ) {
      const mid = Math.floor((left + right) / 2);
      if (this.array[mid] === value) {
        return mid;
      } else if (this.array[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}

const shortedArray = new ShortedArray(3);
shortedArray.insert(7);
shortedArray.insert(1);
shortedArray.insert(13);
shortedArray.insert(14);
shortedArray.insert(5);
shortedArray.insert(6);
shortedArray.insert(3);
shortedArray.insert(9);
shortedArray.insert(15);
shortedArray.insert(8);

console.log(shortedArray.toString());
console.log(shortedArray.search(5));
