class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // O(1)
  get(index) {
    return this.data[index];
  }

  // O(1)
  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.length;
  }

  // O(1)
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return lastItem;
  }

  // O(N)
  delete(index) {
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  // O(N)
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length -= 1;
  }
}

const newArray = new MyArray();
newArray.push("This");
newArray.push("is");
newArray.push("a");
newArray.push("&^%#$&^");
newArray.pop();
newArray.push("mistake");
newArray.push("test");
newArray.push("!");
newArray.delete(3);
console.log(newArray);
